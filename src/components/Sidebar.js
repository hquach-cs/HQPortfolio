import React, { Component } from "react";
import "./../styles/sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <nav class="sidebar" id="sidebar">
        <div class="sidebar-header">
          <h3>Visual Algorithm</h3>
        </div>

        <ul class="sidebar-list">
          <li>
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                class="svg-inline--fa fa-home fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                id="svg-link"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="project-diagram"
                class="svg-inline--fa fa-project-diagram fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                id="svg-link"
              >
                <path
                  fill="currentColor"
                  d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
              Neural Network
            </a>
          </li>
          <li>
            <a
              href="#algSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="buffer"
                class="svg-inline--fa fa-buffer fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                id="svg-link"
              >
                <path
                  fill="currentColor"
                  d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z"
                ></path>
              </svg>
              Algorithms
            </a>
            <ul class="collapse list-unstyled" id="algSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                class="svg-inline--fa fa-user fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                id="svg-link"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                ></path>
              </svg>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
