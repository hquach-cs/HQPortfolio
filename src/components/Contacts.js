import React from "react";
import "./../styles/contacts.css";
import { Spring } from "react-spring/renderprops";

function Contacts(props) {
  return (
    <div class="contacts" id="ContactSection">
      <Spring
        from={{ opacity: 0, marginTop: 0 }}
        to={{ opacity: props.visible ? 1 : 0, marginTop: 0 }}
        config={{ delay: 0, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <h2 class="contacts-title">
              <span style={{ fontSize: "40px", color: "#66FCF1" }}>4.</span>
              Contacts
            </h2>
            <div class="contacts-content">
              <p>If you like what you see, lets chat!</p>
              <p>
                Other stuff that you can check out is my github:{" "}
                <a
                  class="contacts-github-link"
                  href="https://github.com/hquach-cs"
                >
                  https://github.com/hquach-cs
                </a>
              </p>
            </div>
            <a class="contacts-button" href="mailto:hquach.cs@gmail.com">
              Lets get in touch!
            </a>
          </div>
        )}
      </Spring>
    </div>
  );
}

export default Contacts;
