import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { element, element2 } from "./2_formatName";
import { Welcome } from "./4_component&props";
import { Comment, comment } from "./5_extractingComponents";
import { Clock } from "./6_state&lifecycle";
import { Toggle } from "./7_handlingEvents";
import { ParentComponent } from "./myParentComponent";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("helloWorld"));

ReactDOM.render(element, document.getElementById("name"));
ReactDOM.render(element2, document.getElementById("stranger"));

function CustElement() {
  return (
    <div>
      <Welcome name="Gaurav Goyal" />
      <Welcome name="Tejas Garg" />
    </div>
  );
}

ReactDOM.render(<CustElement />, document.getElementById("custElement"));

/*function tick() {
  const element = (
    <div>
      <h1>Hello World</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("clockExample"));
}
setInterval(tick, 1000);*/
/*
function Clock(props) {
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
ReactDOM.render(<Clock />, document.getElementById("clockExample"));
ReactDOM.render(<Toggle />, document.getElementById("toggleElement"));
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("commentElement")
);
ReactDOM.render(
  <ParentComponent />,
  document.getElementById("parentChildCommunication")
);
registerServiceWorker();
