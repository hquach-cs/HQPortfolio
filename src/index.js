import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
//import Social from "./components/Social";
//import Loading from "./components/Loading";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        welcome: true,
        about: false,
        projects: false,
        contact: false,
      },
    };
  }
  render() {
    return (
      <div style={{ disply: "flex" }}>
        <Header active={this.state.active} />
        <div style={{ width: "100%", height: "2000px" }}>
          <Welcome />
          <About />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
