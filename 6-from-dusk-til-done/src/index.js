import $ from "jquery";
import todoListItem from "./todoListItem";

function getTodos(callback) {
  return $.ajax(
    "/todos",
    {
      method: "GET"
    }
  )
  .done( (data) => {
    console.log("Success!");
    callback(data);
  })
  .fail( () => {
    console.error("Something bad happened");
  });
}


$(document).ready( () => {
  getTodos((todos) => {
    todos.forEach((todo) => {
      $("#root").append(todoListItem(todo));
    });
  });
});
