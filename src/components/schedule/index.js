import React, { Component } from "react";

import ScheduleCard from "./schedule-card";

class Schedules extends Component {
  state = {
    currentUnit: "PDT",
    currentTimeZone: +7,
    schedules: {
      a: [
        {
          avatar: "",
          speaker: "",
          title: "Pre-Party",
          times: {
            start: "04:00 PDT",
            end: "06:00 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Jeffrey Fritz / CSharpFritz",
          title:
            "Native Code, WebAssembly, and C# - Build with Blazo by Jeffrey Fritz / CSharpFritz",
          times: {
            start: "06:00 PDT",
            end: "09:30 PDT",
          },
        },
        {
          avatar: "Jimmy Engström",
          speaker: "Jemina Abu",
          title: "Manipulating Webpages using DevTools",
          times: {
            start: "06:30 PDT",
            end: "07:00 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Jimmy Engström",
          title: "Blazor Web Bluetooth",
          times: {
            start: "07:00 PDT",
            end: "07:30 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Trezy / TrezyCodes",
          title: "What disabled people think of your website",
          times: {
            start: "07:30 PDT",
            end: "08:00 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Sarah Dutkiewicz / Sadukie",
          title: "Data Adventures with Azure Notebooks",
          times: {
            start: "08:00 PDT",
            end: "08:30 PDT",
          },
        },
        {
          avatar: "",
          speaker: "es Montemagno",
          title: "Building a Friend System with No Servers & No Useres",
          times: {
            start: "08:30 PDT",
            end: "09:30 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Jason Harrison / doctorargus",
          title: "Augmented Reality with Unity - A History and a How-To",
          times: {
            start: "09:30 PDT",
            end: "10:00 PDT",
          },
        },
        {
          avatar: "./img/speakers/JeffBlankenburg.jpg",
          speaker: "Jeff Blankenburg",
          title: "Building Your First Skill for Alexa",
          times: {
            start: "10:00 PDT",
            end: "10:30 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Nina Zakharenko / nnjaio",
          title: "Light Up Your Life, With Python and LEDs!",
          times: {
            start: "10:30 PDT",
            end: "11:00 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Mark Miller / CodeRushed",
          title: "The Science of Great UI",
          times: {
            start: "11:00 PDT",
            end: "11:30 PDT",
          },
        },
        {
          avatar: "",
          speaker: "Bryan Robinson",
          title: "Join the CSS Future with CSS Grid",
          times: {
            start: "11:30 PDT",
            end: "12:30  PDT",
          },
        },
        {
          avatar: "./img/speakers/JoeKarlsson.jpg",
          speaker: "Joe Karlsson",
          title:
            "An Introduction To IoT (Internet of Toilets); Or How I built an IoT Kitty Litter Box Using JavaScript",
          times: {
            start: "12:30  PDT",
            end: "13:00  PDT",
          },
        },
        {
          avatar: "",
          speaker: "Raphael Mun / Instafluff",
          title: "e Design is a Science!",
          times: {
            start: "13:00  PDT",
            end: "13:30  PDT",
          },
        },
        {
          avatar: "",
          speaker: "Miko Charbonneau / drmikachu",
          title: "Picking the Right e Engine",
          times: {
            start: "13:30  PDT",
            end: "14:00  PDT",
          },
        },
        {
          avatar: "",
          speaker: "Dr. Mahmood Hikmet / sadmoody",
          title:
            "Everything you need to know to have an argument about Blockchain",
          times: {
            start: "14:00  PDT",
            end: "14:30  PDT",
          },
        },
        {
          avatar: "",
          speaker: "Tyler Leonhardt",
          title:
            "Auto generate code to interact with your REST API using AutoRest",
          times: {
            start: "14:30  PDT",
            end: "15:30  PDT",
          },
        },
      ],
    },
  };

  componentDidMount() {
    this.displayNewUnit("UTC");
  }

  handleUnitChange(e) {
    e.preventDefault();
    this.displayNewUnit(e.target.value);
  }
  displayNewUnit = (unit) => {
    let tempArr = [];
    this.state.schedules.a.map((schedule) => {
      schedule.times.start = this.changeTimeUnit(schedule.times.start, unit);
      schedule.times.end = this.changeTimeUnit(schedule.times.end, unit);
      tempArr.push(schedule);
      return null;
    });
    this.setState({
      schedules: {
        a: tempArr,
      },
    });
  };

  convertHourToUTC(hour) {
    let newHour = hour;
    for (let i = 0; i < 7; i++) {
      newHour += 1;
      if (newHour <= 0) {
        newHour = 24;
      }
    }
    return newHour;
  }

  changeTimeUnit = (value, unit) => {
    let dayTime = "PM";
    let splitted = value.split(":");
    let hourInt = parseInt(splitted[0]);
    let hour = this.convertHourToUTC(hourInt);
    if (hour <= 12) {
      dayTime = "AM";
    }
    console.log(hour);
    let minutes = splitted[1].slice(0, 3);
    if (hour < 10) {
      return `0${hour}:${minutes}${dayTime} ${unit}`;
    }
    return `${hour}:${minutes}${dayTime} ${unit}`;
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
          <p className="schedules__conf-title">Conference Part A</p>
          <p className="schedules__conf-title --bold">
            Thursday April 9th 2020
          </p>
          <select
            className="schedule__unit-conversion"
            onChange={(e) => this.handleUnitChange(e)}
            e=""
            id=""
          >
            <option value="PDT">PDT</option>
            <option value="EDT">EDT</option>
            <option value="UTC">UTC</option>
          </select>
          <div className="schedules__card-container">
            <div className="row">
              {this.state.schedules.a.map((e, index) => (
                <ScheduleCard infos={e} key={e.title} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Schedules;
