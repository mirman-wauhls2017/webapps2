import $ from "jquery";
import {addTodo} from "./actions";

export default function newTodoForm(){
  const newDiv = $(document.createElement("div"));
  const newForm = $(document.createElement("form"))
  newForm
  .append(
    $(document.createElement("h2")).text("New Todo")
  )
  .append(
    $(document.createElement("input"))
    .attr("type","text")
    .attr("id","new-todo-text")
    .attr("placeholder","Say hey, that's pretty good")
  )
  .append(
    $(document.createElement("input"))
    .attr("type","date")
    .attr("id","new-todo-date")
  )
  .append(
    $(document.createElement("button"))
    .text("Add")
    .click((e) => {
      e.preventDefault();
      console.log("Adding a todo");
      const newTodo = {
        text: $("#new-todo-text").val(),
        date: $("#new-todo-date").val()
      };
      addTodo([],newTodo);
    })
    .attr("id","add-new-todo")
  )
  .attr("id","new-todo");
  newDiv
  .append (
    newForm
  );
  return newDiv;
}
