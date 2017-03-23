import React from "react";

export default class NameField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Hello"
    }
  }

  changeHandler(e){
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <input type="text"
      defaultValue={this.state.name}
      onChange={this.changeHandler.bind(this)} />
    )
  }
}
