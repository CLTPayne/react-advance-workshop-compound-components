import React, { Component } from "react";

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  select(value) {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isSelected: child.props.value === this.state.value,
        onClick: () => this.select(child.props.value)
      });
    });
    return <div>{children}</div>;
  }
}

export default RadioGroup;
