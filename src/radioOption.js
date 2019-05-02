import React from "react";

const RadioOption = props => {
  return (
    <div onClick={props.onClick}>
      <div
        style={{
          borderColor: "#ccc",
          borderSize: "3px",
          borderStyle: props.isSelected ? "inset" : "outset",
          height: 16,
          width: 16,
          display: "inline-block",
          cursor: "pointer",
          background: props.isSelected ? "rgba(0, 0, 0, 0.05)" : ""
        }}
        isSelected={props.isSelected}
      />
      {props.children}
    </div>
  );
};

export default RadioOption;
