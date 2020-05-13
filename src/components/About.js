import React, { Component } from "react";
import "./../styles/about.css";
import AboutCard from "./AboutCard";
import { Spring } from "react-spring/renderprops";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: {
        class: "about-welcome",
        title: "More about me!",
        text:
          "I'm an aspiring software developer that loves to program multiple interesting apps to showcase to users.",
      },
      goals: {
        class: "about-goals",
        title: "Goals",
        text:
          "My goal is to become a reliable programmer that create multiple things that users/consumers enjoy.",
      },
      education: {
        class: "about-education",
        title: "Education",
        text:
          "I got my associate and bachelor's degree in computer science. I graduated from The University of Tennessee, Knoxville in December of 2019. Go Vols!",
      },
      tbd: {
        class: "about-TBD",
        title: "Skills",
        text:
          "I am proficient in python, c/c++,java, javascript, html5/css, machine learning, and data analyst",
      },
    };
  }

  render() {
    return (
      <section class="about" id="AboutSection">
        <Spring
          from={{ opacity: 0, marginTop: 0 }}
          to={{ opacity: this.props.visible ? 1 : 0, marginTop: 0 }}
          config={{ delay: 0, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <div class="about-list">
                <h2 class="about-title">
                  <span style={{ fontSize: "40px", color: "#66FCF1" }}>2.</span>
                  About Me
                </h2>
                <AboutCard
                  class={this.state.welcome.class}
                  title={this.state.welcome.title}
                  text={this.state.welcome.text}
                ></AboutCard>
                <AboutCard
                  class={this.state.goals.class}
                  title={this.state.goals.title}
                  text={this.state.goals.text}
                />
                <AboutCard
                  class={this.state.education.class}
                  title={this.state.education.title}
                  text={this.state.education.text}
                />
                <AboutCard
                  class={this.state.tbd.class}
                  title={this.state.tbd.title}
                  text={this.state.tbd.text}
                />
              </div>
            </div>
          )}
        </Spring>
      </section>
    );
  }
}
