import React, { Component } from "react";
import ReactDOM from "react-dom";
import RadioGroup from "./radioGroup";
import RadioOption from "./radioOption";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: "React"
    };
  }

  render() {
    return (
      <div>
        <div>Hiiiii</div>
        <h3>
          Here is a list of stuff that uses a compound component that uses:{" "}
          {this.state.radioValue}
        </h3>
        <RadioGroup onChange={radioValue => this.setState({ radioValue })}>
          <RadioOption value="React">React</RadioOption>
          <RadioOption value="CSS">CSS</RadioOption>
          <RadioOption value="HTML">HTML</RadioOption>
          <RadioOption value="CodeSandbox">Code Sandbox</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
