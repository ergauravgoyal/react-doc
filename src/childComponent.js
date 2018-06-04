import React from "react";

export class Child extends React.Component {
  render() {
    return (
      <div>
        {/* The button will execute the handler function set by the parent component */}
        <button onClick={this.props.action}>Press me</button>
      </div>
    );
  }
}
