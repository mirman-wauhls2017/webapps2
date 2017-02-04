import React from "react";
import { connect } from "react-redux";
import {addTodo} from "../actions";

class NewTodoForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        newText: "Get Milk",
        newDate: Date.now()
      }
    }

    textChangeHandler(e) {
      this.setState({newText:e.target.value})
    }

    dateChangeHandler(e) {
      this.setState({newDate:e.target.value})
    }

    submitHandler(e) {
      addTodo({
        text:this.state.newText,
        date: this.state.newDate
      })
    }

    render() {
      return (
        <form>
          <h2>Add a Todo</h2>
          <input type="texc" value={this.state.newText} onChange={this.textChangeHandler.bind(this)}/>
          <input type="date" value={this.state.newDate} onChange={this.dateChangeHandler.bind(this)}/>
          <button type="button" onClick={this.submitHandler.bind(this)}>
            Add
          </button>
        </form>
      )
    }
}

export default connect()(NewTodoForm);
