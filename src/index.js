import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
//import Social from "./components/Social";
//import Loading from "./components/Loading";
import Header from "./components/Header";
import Loading from "./components/Loading";
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
      loading: false,
    };
  }
  render() {
    if (!this.state.loading) {
      return (
        <div style={{ disply: "flex" }} id="HomeSection">
          <Header active={this.state.active} />
          <div style={{ width: "100%", height: "2000px" }}>
            <Welcome />
            <About />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Loading />
          {setTimeout(() => {
            this.setState({
              loading: false,
            });
          }, 3000)}
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
