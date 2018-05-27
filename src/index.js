import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { element, element2 } from "./2_formatName";
import { custElement } from "./4_component&props";
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("helloWorld"));

ReactDOM.render(element, document.getElementById("name"));
ReactDOM.render(element2, document.getElementById("stranger"));
ReactDOM.render(custElement, document.getElementById("custElement"));
function tick() {
  const element = (
    <div>
      <h1>Hello World</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("clockExample"));
}
setInterval(tick, 1000);
registerServiceWorker();
