import React from "react";
import { Child } from "./childComponent";

export class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      messageShown: false
    };
  }

  // This method will be sent to the child component
  handler() {
    console.log("Button is clicked");
    this.setState({
      messageShown: true
    });
  }

  // Render the child component and set the action property with the handler as value
  render() {
    return <Child action={this.handler} />;
  }
}
