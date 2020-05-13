import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

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
      loading: true,
      prevScrollpos: window.pageYOffset,
      visible: true,
      aboutVisible: false,
      projectsVisible: false,
      contactsVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    console.log(currentScrollPos);
    if (currentScrollPos < 500) {
      this.setState({
        active: {
          welcome: true,
          about: false,
          projects: false,
          contact: false,
        },
      });
    }
    if (currentScrollPos >= 500) {
      this.setState({
        aboutVisible: true,
        active: {
          welcome: false,
          about: true,
          projects: false,
          contact: false,
        },
      });
    }
    if (currentScrollPos >= 1400) {
      this.setState({
        projectsVisible: true,
        active: {
          welcome: false,
          about: false,
          projects: true,
          contact: false,
        },
      });
    }
    if (currentScrollPos >= 2300) {
      this.setState({
        contactsVisible: true,
        active: {
          welcome: false,
          about: false,
          projects: false,
          contact: true,
        },
      });
    }
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    if (!this.state.loading) {
      return (
        <div style={{ disply: "flex" }} id="HomeSection">
          <Header
            active={this.state.active}
            visible={this.state.visible}
            prevScrollpos={this.state.prevScrollpos}
          />
          <Social />
          <div style={{ width: "100%", minHeight: "2000px" }}>
            <Welcome />
            <About visible={this.state.aboutVisible} />
            <Projects visible={this.state.projectsVisible} />
            <Contacts visible={this.state.contactsVisible} />
            <Footer />
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
