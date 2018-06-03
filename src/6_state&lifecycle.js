import React from "react";

export class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }
  componentDidMount() {
    //console.log("Component is mounted");
    //debugger;
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    //console.log("Component is Unmounted");
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
    //modifying state directl will not re-render the component
    //this.state.date = new Date();
    //debugger;
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function FormattedDate(props) {
  //debugger;
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}
/*function Clock(props) {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById("clockExample")
  );
}
setInterval(tick, 1000);
*/
