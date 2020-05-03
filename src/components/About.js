import React, { Component } from "react";
import "./../styles/about.css";

export default class About extends Component {
  render() {
    return (
      <section class="about" id="AboutSection">
        <div>
          <h2 class="about-title">
            <span style={{ fontSize: "40px" }}>2.</span> About Me
            <div class="about-image"></div>
          </h2>
          <div class="about-welcome">
            <h3>More about me!</h3>
            <p>
              I'm an aspiring software developer that loves to program multiple
              interesting apps to showcase to users.
            </p>
          </div>
          <div class="about-goals">
            <h3>Goals</h3>
            <p>
              My goal is to become a reliable programmer that create multiple
              things that users/consumers enjoy.
            </p>
          </div>
          <div class="about-education">
            <h3>Education</h3>
            <p>
              I got my associate and bachelor's degree in computer science. I
              graduated from The University of Tennessee, Knoxville in December
              of 2019. Go Vols!
            </p>
          </div>
          <div class="about-TBD">
            <h3>TBD</h3>
            <p>
              Integer vehicula justo vel sapien viverra congue. Etiam efficitur
              In scelerisque porta dictum. Suspendisse condimentum finibus eros,
            </p>
          </div>
        </div>
      </section>
    );
  }
}
