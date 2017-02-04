import fetch from "isomorphic-fetch";

export function addTodo(newTodo) {
  console.log(newTodo);
  return (dispatch) => {
    return fetch("/todos",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    })
      .then( (response) => {
        return response.json();
      })
      .then( (json) => {
        return dispatch(receiveTodos(json));
      });
  }
}

export function requestTodos() {
  return {
    type: "REQUEST_TODOS"
  }
}

function receiveTodos(todos) {
  return {
    type: "RECEIVE_TODOS",
    todos
  }
}

export function fetchTodos() {
  return (dispatch) => {
    dispatch(requestTodos())
    return fetch("/todos")
      .then( (response) => {
        return response.json();
      })
      .then( (json) => {
        return dispatch(receiveTodos(json));
      });
  }
}

export function deleteTodo(id) {
  return (dispatch) => {
    return fetch(`/todos/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then( (response) => {
        return response.json();
      })
      .then( (json) => {
        return dispatch(receiveTodos(json));
      });
  }
}

export function editTodo(id, editedTodo) {
  return {
    type: "EDIT_TODO",
    id,
    editedTodo
  }
}
