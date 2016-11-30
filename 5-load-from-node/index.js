const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();

function loadSingleTodo(res, id) {
  return fs.readFile("./todos.json", (err, raw) => {
      if (err) throw err;
      todos = JSON.parse(raw).data;
      for(const t in todos){
        const todo = todos[t];
        console.log(todo.text);
        if (todo.completed == true) console.log("You have completed this todo.");
        else console.log("You haven't finished this todo.");


      }
  });
}

function loadTodos(res) {
  return fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
}

app.route("/todos")
.get((req,res) => {
  loadTodos(res);
})
.post((req,res) => {
  res.send("Creating a todo");
});

app.route("/todos/:id")
.get((req,res) => {
  const id = req.params.id;
  loadSingleTodo(res, id);
})
.put((req,res) => {
  const id = req.params.id;
  res.send(`Updating todo #${id}`)
})
.delete((req,res) => {
  const id = req.params.id;
  res.send(`Deleting todo #${id}`);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
