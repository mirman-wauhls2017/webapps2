import React from "react";
import { render } from "react-dom";
import Message from "./components/Message";
import Thing from "./components/Thing";
import Counter from "./components/Counter";
import NameField from "./components/NameField"

class App extends React.Component {

  render() {
    const messages = [
      "Hey, that's pretty good",
      "Hey, that's pretty bad",
      "Hey, that's totally pretty solid"
    ];
    const goods = [
      "good",
      "bad",
      "solid"
    ]
    return (
      <div>
        <h1>Hello from React!</h1>
        {
          messages.map((m) => {
            return (
              <Message message={m} />
            )
          })
        }
        {
          goods.map((m) => {
            return (
              <Thing good={m} />
            )
          })
        }
        <Counter />
        <NameField />
      </div>
    )
  }

}

render(<App />, document.getElementById("root"));
