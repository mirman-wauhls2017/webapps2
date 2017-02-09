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
    .attr("id",`todo-check-${todo.id}`)
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
    .attr("id",`todo-edit-${todo.id}`)
    .on("click", () => {
      $(`#edit-todo-${todo.id}`).slideDown();
      $(`#todo-edit-${todo.id}`).hide();
    })
  )
  .append(
    $(document.createElement("button"))
    .text("Delete")
    .attr("type","button")
    .on("click", () => {
      const con = confirm("Are you sure, m8?");
      if(con) {deleteTodo([],todo.id);}
    })
  )
  .append(
    $(document.createElement("div"))
    .attr("id",`edit-todo-${todo.id}`)
    .hide()
    .append(
      $(document.createElement("input"))
      .attr("type","text")
      .val(todo.text)
      .attr("id",`edit-text-${todo.id}`)
    )
    .append(
      $(document.createElement("input"))
      .attr("type","date")
      .val(todo.date)
      .attr("id",`edit-date-${todo.id}`)
    )
    .append(
      $(document.createElement("button"))
      .text("Save")
      .on("click",(e) => {
        $(`#edit-todo-${todo.id}`).slideUp();
        $(`#todo-edit-${todo.id}`).show();
        e.preventDefault();
        const editedTodo = {
          id: todo.id,
          text: $(`#edit-text-${todo.id}`).val(),
          date: $(`#edit-date-${todo.id}`).val(),
          completed: $(`#todo-check-${todo.id}`).is(":checked")
        };
        console.log(editedTodo);
        editTodo([],todo.id,editedTodo);
      })
    )
    .append(
      $(document.createElement("button"))
      .text("Cancel")
      .on("click",() => {
        $(`#edit-todo-${todo.id}`).slideUp();
        $(`#todo-edit-${todo.id}`).show();
      })
    )
  )
  .addClass("todo");
  return newDiv;
};
