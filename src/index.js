import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Social from "./components/Social";

class App extends Component {
  render() {
    return <Social />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
