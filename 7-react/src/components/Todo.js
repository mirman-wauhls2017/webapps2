import React, {PropTypes} from "react";


export default class Todo extends React.Component {

  completeToggle(e) {
    return {
      id: this.props.id,
      completed: e.target.value,
      text: this.props.text,
      date: this.props.date
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.date}: {this.props.text}</h3>
        <input
         type="checkbox"
         checked={this.props.completed}
         onClick={(e)=> {
           this.props.editHandler(this.props.id,this.completeToggle(e));
         }}
        />
        <button type="button">Edit</button>
        <button
          type="delete"
          onClick={() => {this.props.deleteHandler(this.props.id)}}
        >
          Delete
        </button>
      </div>

    )
  }
}

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired)
}
