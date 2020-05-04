import React, { Component } from "react";
import "./../styles/about.css";
import AboutCard from "./AboutCard";

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
        title: "TBD",
        text:
          "Integer vehicula justo vel sapien viverra congue. Etiam efficitur In scelerisque porta dictum. Suspendisse condimentum finibus eros,",
      },
    };
  }
  render() {
    return (
      <section class="about" id="AboutSection">
        <div>
          <h2 class="about-title">
            <span style={{ fontSize: "40px" }}>2.</span> About Me
            <div class="about-image"></div>
          </h2>
          <AboutCard
            class={this.state.welcome.class}
            title={this.state.welcome.title}
            text={this.state.welcome.text}
          />
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
      </section>
    );
  }
}
