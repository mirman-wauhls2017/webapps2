import $ from "jquery";
import {deleteTodo, editTodo} from "./actions";

export default function todoListItem(todo) {
  const newDiv = $(document.createElement("div"));
  newDiv
  .append (
    $(document.createElement("h3"))
    .text(`${todo.date}: ${todo.text}`)
  )
  .append (
    $(document.createElement("input"))
    .attr("type","checkbox")
    .attr("checked",todo.completed)
    .attr("class","check")
    .on("click",(e) => {
      const editedTodo = {
        id: todo.id,
        text: todo.text,
        date: todo.date,
        completed: e.target.checked
      }
      editTodo([],todo.id,editedTodo);
    })
  )
  .append(
    $(document.createElement("button"))
    .text("Edit")
    .attr("type","button")
    .on("click", () => {
    })
  )
  .append(
    $(document.createElement("button"))
    .text("Delete")
    .attr("type","button")
    .on("click", () => {
      deleteTodo([],todo.id);
    })
  )
  .addClass("todo");
  return newDiv;
};
