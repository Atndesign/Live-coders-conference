import React, { Component } from "react";

import ScheduleCard from "./schedule-card";

class Schedules extends Component {
  state = {
    currentUnit: "PDT",
    schedules: {
      a: [
        {
          avatar: "",
          title: "Pre-Party",
          times: {
            start: "04:00 AM PDT",
            end: "06:00 AM PDT",
          },
        },
        {
          avatar: "",
          title:
            "Native Code, WebAssembly, and C# - Build with Blazo by Jeffrey Fritz / CSharpFritz",
          times: {
            start: "06:00 AM PDT",
            end: "09:30 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Manipulating Webpages using DevTools",
          times: {
            start: "06:30 AM PDT",
            end: "07:00 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Blazor Web Bluetooth",
          times: {
            start: "07:00 AM PDT",
            end: "07:30 AM PDT",
          },
        },
        {
          avatar: "",
          title: "What disabled people think of your website",
          times: {
            start: "07:30 AM PDT",
            end: "08:00 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Data Adventures with Azure Notebooks",
          times: {
            start: "08:00 AM PDT",
            end: "08:30 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Building a Friend System with No Servers & No Usernames",
          times: {
            start: "08:30 AM PDT",
            end: "09:30 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Augmented Reality with Unity - A History and a How-To",
          times: {
            start: "09:30 AM PDT",
            end: "10:00 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Building Your First Skill for Alexa",
          times: {
            start: "10:00 AM PDT",
            end: "10:30 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Light Up Your Life, With Python and LEDs!",
          times: {
            start: "10:30 AM PDT",
            end: "11:00 AM PDT",
          },
        },
        {
          avatar: "",
          title: "The Science of Great UI",
          times: {
            start: "11:00 AM PDT",
            end: "11:30 AM PDT",
          },
        },
        {
          avatar: "",
          title: "Join the CSS Future with CSS Grid",
          times: {
            start: "11:30 AM PDT",
            end: "12:30 PM PDT",
          },
        },
        {
          avatar: "",
          title:
            "Joe Karlsson An Introduction To IoT (Internet of Toilets); Or How I built an IoT Kitty Litter Box Using JavaScript",
          times: {
            start: "12:30 PM PDT",
            end: "01:00 PM PDT",
          },
        },
        {
          avatar: "",
          title: "Game Design is a Science!",
          times: {
            start: "01:00 PM PDT",
            end: "01:30 PM PDT",
          },
        },
        {
          avatar: "",
          title: "Picking the Right Game Engine",
          times: {
            start: "01:30 PM PDT",
            end: "02:00 PM PDT",
          },
        },
        {
          avatar: "",
          title:
            "Everything you need to know to have an argument about Blockchain",
          times: {
            start: "02:00 PM PDT",
            end: "02:30 PM PDT",
          },
        },
        {
          avatar: "",
          title:
            "Auto generate code to interact with your REST API using AutoRest",
          times: {
            start: "02:30 PM PDT",
            end: "03:30 PM PDT",
          },
        },
      ],
    },
  };

  displayNewUnit = (e) => {
    e.preventDefault();
    let tempArr = [];
    let unit = e.target.value;
    this.state.schedules.a.map((schedule) => {
      schedule.times.start = this.changeTimeUnit(schedule.times.start, unit);
      schedule.times.end = this.changeTimeUnit(schedule.times.end, unit);
      console.log(schedule.times.end);
      tempArr.push(schedule);
      return null;
    });
    this.setState({
      schedules: {
        a: tempArr,
      },
    });
  };

  changeTimeUnit = (value, unit) => {
    let splitted = value.split(":");
    let num = parseInt(splitted[0]);
    let time = splitted[1].slice(-6, -4);
    let hour;
    let minutes = splitted[1].slice(0, 3);
    if (unit.toUpperCase() === this.state.currentUnit) return value;
    else if (unit.toUpperCase() === "EDT" && this.state.currentUnit === "PDT") {
      hour = num += 3;
      this.setState({
        currentUnit: unit,
      });
    } else if (
      unit.toUpperCase() === "PDT" &&
      this.state.currentUnit === "EDT"
    ) {
      hour = num -= 3;
      this.setState({
        currentUnit: unit,
      });
    }
    if (hour < 10) {
      return `0${hour}:${minutes}${time} ${unit}`;
    }
    return `${hour}:${minutes}${time} ${unit}`;
  };

  render() {
    return (
      <section id="schedules" className="schedules">
        <div className="container">
          <h2 className="section__title --white">Schedules</h2>
          <p className="schedules__desc">
            Schedule is tentative and subject to change (will update any
            changes!) Each talk will last about 45 minutes.
          </p>
          <a
            href="./file/schedules.pdf"
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
          <div className="row">
            <div className="col-md-6">
              <p className="schedules__conf-title">Conference Part A</p>
              <p className="schedules__conf-title --bold">
                Thursday April 9th 2020
              </p>
              <select
                className="schedule__unit-conversion"
                onChange={(e) => this.displayNewUnit(e)}
                name=""
                id=""
              >
                <option value="PDT">PDT</option>
                <option value="EDT">EDT</option>
              </select>
              <div className="schedules__card-container">
                {this.state.schedules.a.map((e, index) => (
                  <ScheduleCard infos={e} key={e.title} index={index} />
                ))}
              </div>
            </div>
            {/* <div className="col-md-6">
              <p className="schedules__conf-title">Conference Part B</p>
              <p className="schedules__conf-title --bold">
                Thursday April 9th 2020
              </p>
              <div className="schedules__card-container">
                {schedules.b.map((e, index) => (
                  <ScheduleCard infos={e} key={e.title} index={index} />
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Schedules;
