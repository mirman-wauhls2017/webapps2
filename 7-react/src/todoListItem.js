import $ from "jquery";
import {deleteTodo,editTodo} from "./actions";
export default function todoListItem(todo) {
  return $(document.createElement("div"))
    .append(
      $(document.createElement("h3")).text(
        `${todo.date}: ${todo.text}`
      )
    )
    .append(
      $(document.createElement("input"))
        .attr("type","checkbox")
        .attr("id",`todo-${todo.id}-completed`)
        .attr("checked", todo.completed)
        .click((e) => {
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
      .attr("type","button")
      .attr("id",`btn-edit-${todo.id}`)
      .text("Edit")
      .click((e) => {
        $(e.target).hide();
        $(`#edit-todo-${todo.id}`).slideDown();
      })
    )
    .append(
      $(document.createElement("button"))
      .attr("type","button")
      .text("Delete")
      .click(() =>{
        const c = confirm(`Are you sure you want to delete ${todo.text}?`);
        if (c) { deleteTodo([],todo.id); }

      })
    )
    .append(
      $(document.createElement("div"))
      .attr("id",`edit-todo-${todo.id}`)
      .append(
        $(document.createElement("input"))
        .attr("type","text")
        .val(todo.text)
        .attr("id",`edit-todo-text-${todo.id}`)
      )
      .append(
        $(document.createElement("input"))
        .attr("type","date")
        .val(todo.date)
        .attr("id",`edit-todo-date-${todo.id}`)
      )
      .append(
        $(document.createElement("button"))
        .attr("type","button")
        .text("Save")
        .click((e) => {
          console.log("Saving todo");
          const editedTodo = {
            id: todo.id,
            text: $(`#edit-todo-text-${todo.id}`).val(),
            date: $(`#edit-todo-date-${todo.id}`).val(),
            completed: $(`#todo-${todo.id}-completed`).is(":checked")
          }
          $(e.target).parent().slideUp();
          $(`#btn-edit-${todo.id}`).show();
          editTodo([],todo.id,editedTodo);
        })
      )
      .append(
        $(document.createElement("button"))
        .attr("type","button")
        .text("Cancel")
        .click((e) => {
          console.log("Canceling");
          $(e.target).parent().slideUp();
          $(`#btn-edit-${todo.id}`).show();
        })
      )
      .hide()
    )
    .attr("id",`todo-${todo.id}`)
    .addClass("todo");
}
