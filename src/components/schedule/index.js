import React, { Component } from "react";

import ScheduleCard from "./schedule-card";

let schedules = {
  a: [
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      title: "Using Azure IoT Central to form a basis for your IoT Solutions",
      times: {
        start: "05:00 AM PDT",
        end: "06:15 AM PDT",
      },
    },
  ],
  b: [
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      title: "Using Azure IoT Central to form a basis for your IoT Solutions",
      times: {
        start: "05:00 AM PDT",
        end: "06:15 AM PDT",
      },
    },
  ],
};

class Schedules extends Component {
  state = {};
  render() {
    return (
      <section id="schedules" className="schedules">
        <div className="container">
          <h2 className="section__title --white">Schedules</h2>
          <p className="schedules__desc">
            Schedule is tentative and subject to change (will update any
            changes!) Due to the amount of speakers we have, we are breaking up
            the conference into two parts, Part A and Part B. The listed times
            are in PDT. Each talk will last about 45 minutes.
          </p>
          <a
            href="./schedules"
            download="schedules.pdf"
            className="schedules__download-btn"
          >
            <img
              className="download-btn__icon"
              srcSet="./img/icons/download.svg"
              src="./img/icons/download.png"
              alt="download our schedules"
            />
            <span>Download the schedules</span>
          </a>
          <p className="schedules__conf-title">Conference Part A</p>
          <p className="schedules__conf-title --bold">
            Thursday April 9th 2020
          </p>
          {schedules.a.map((e) => (
            <ScheduleCard infos={e} />
          ))}
        </div>
      </section>
    );
  }
}

export default Schedules;
