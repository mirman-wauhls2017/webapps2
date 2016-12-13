'use strict';

const express = require("express");
const bodyParser = require("body-parser")
const fs = require("fs");
const port = 3000;

const app = express();

app.use(bodyParser.json());

function loadTodos(callback) {
  return fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data));
  });
}

app.route("/todos")
.get((req,res) => {
  loadTodos((json) => {
    res.json(json.data);
  });
})
.post((req,res) => {
  let newTodo = req.body;
  newTodo.completed = false;
  console.log(newTodo);
  loadTodos((json) => {
    json.data.push(newTodo);
    json.lastId++;
    newTodo.id = json.lastId;
    fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });
});

app.route("/todos/:id")
.get((req,res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    for (const todo of todos) {
      if (todo.id === id) {
        return res.json(todo);
      }
    }
  })
})
.put((req,res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    for(const todo of todos) {
      if (todo.id === id){
        todo.text = req.body.text;
        todo.completed = req.body.completed;
      }
    }
    json.data = todos
    console.log(json.data);
    fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });

  res.send(`Updating todo #${id}`)
})
.delete((req,res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    const updated = todos.filter((rId) => {
      return rId.id != id;
    });
    json.data = updated;
    fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
    console.log(updated);
    res.send(`Deleting todo #${id}`);
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
