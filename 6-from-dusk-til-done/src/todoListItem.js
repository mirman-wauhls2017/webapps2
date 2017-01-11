import $ from "jquery";

export default function(todo) {
  const newDiv = $(document.createElement("div"));
  newDiv
  .append (
    $(document.createElement("h3")).text(todo.text)
  )
  .append (
    $(document.createElement("input"))
    .attr("type","checkbox")
    .attr("checked",todo.completed)
  );
  return newDiv;

};
