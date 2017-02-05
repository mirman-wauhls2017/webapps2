import React, {PropTypes} from "react";


export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text,
      completed: props.completed,
      date: props.date
    }
  }

  completeToggle(e) {
    const completed = e.target.checked;
    this.setState({completed})
    return {
      id: this.props.id,
      completed,
      text: this.props.text,
      date: this.props.date
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.date}: {this.props.text}</h3>
        <input
         type="checkbox"
         checked={this.props.completed}
         onChange={(e)=> {
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
