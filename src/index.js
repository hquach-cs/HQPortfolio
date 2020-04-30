import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
//import Social from "./components/Social";
//import Loading from "./components/Loading";
import Main from "./components/Main";

class App extends Component {
  render() {
    return <Main />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
