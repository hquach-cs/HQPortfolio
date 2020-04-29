import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <dic class="wrapper">
        <Sidebar />
        <Content />
      </dic>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
