import React, { Component } from "react";

import ScheduleCard from "./schedule-card";

let currentTimeZone = 0;

class Schedules extends Component {
  state = {
    currentUnit: "EST",
    schedules: {
      a: [
        {
          avatar: "",
          speaker: "",
          title: "Pre-Party",
          times: {
            start: "07:00 EST",
          },
        },
        {
          avatar: "./img/speakers/JeffFritz.jpg",
          speaker: "Jeff Fritz",
          title: "Native Code, WebAssembly, and C# - Build with Blazor",
          times: {
            start: "09:00 EST",
          },
        },
        {
          avatar: "./img/speakers/JemimaAbu.jpg",
          speaker: "Jemima Abu",
          title: "Manipulating Webpages using DevTools",
          times: {
            start: "09:30 EST",
          },
        },
        {
          avatar: "./img/speakers/JimmyEngstrom.jpg",
          speaker: "Jimmy Engström",
          title: "Blazor Web Bluetooth",
          times: {
            start: "10:00 EST",
          },
        },
        {
          avatar: "./img/speakers/KassandraWren.jpg",
          speaker: "Kassian Rosner Wren",
          title: "Creating User Engagement with (ro)bots",
          times: {
            start: "10:30 EST",
          },
        },
        {
          avatar: "./img/speakers/Sadukie.jpg",
          speaker: `Sarah Dutkiewicz (Sadukie)`,
          title: "Data Adventures with Azure Notebooks",
          times: {
            start: "11:00 EST",
          },
        },
        {
          avatar: "./img/speakers/JamesMontemagno.jpg",
          speaker: "James Montemagno",
          title: "Building A Friend System with No Servers & No Usernames",
          times: {
            start: "11:30 EST",
          },
        },
        {
          avatar: "./img/speakers/Aaron.jpg",
          speaker: "Aaron Brooks",
          title: "DevOps, We’ll do it Live: Movie Trailer Edition",
          times: {
            start: "12:30 EST",
          },
        },
        {
          avatar: "./img/speakers/JeffBlankenburg.jpg",
          speaker: "Jeff Blankenburg",
          title: "Building Your First Skill for Alexa",
          times: {
            start: "13:00 EST",
          },
        },
        {
          avatar: "./img/speakers/ninaz.jpg",
          speaker: "Nina Zakharenko",
          title: "Light Up Your Life, With Python and LEDs!",
          times: {
            start: "13:30 EST",
          },
        },
        {
          avatar: "./img/speakers/MarkMiller.jpg",
          speaker: "Mark Miller",
          title: "The Science of Great UI",
          times: {
            start: "14:00 EST",
          },
        },
        {
          avatar: "./img/speakers/BryanRobinson.jpg",
          speaker: "Bryan Robinson",
          title: "Join the CSS Future with CSS Grid",
          times: {
            start: "14:30 EST",
          },
        },
        {
          avatar: "./img/speakers/JoeKarlsson.jpg",
          speaker: "Joe Karlsson",
          title:
            "An Introduction To IoT (Internet of Toilets); Or How I built an IoT Kitty Litter Box Using JavaScript",
          times: {
            start: "15:30 EST",
          },
        },
        {
          avatar: "./img/speakers/Instafluff-Raphael-Mun.jpg",
          speaker: "Raphael Mun",
          title: "Game Design is a Science!",
          times: {
            start: "16:00 EST",
          },
        },
        {
          avatar: "./img/speakers/MikoCharbonneau.jpg",
          speaker: "Dr. Miko Charbonneau",
          title: "Picking the Right game Engine",
          times: {
            start: "16:30 EST",
          },
        },
        {
          avatar: "./img/speakers/ArenDavey.jpg",
          speaker: "Aren Davey",
          title: "An Indoctrination to the Cult of Geometry via JavaScript",
          times: {
            start: "17:00 EST",
          },
        },
        {
          avatar: "./img/speakers/TylerLeonhardt.jpg",
          speaker: "Tyler Leonhardt",
          title:
            "Auto generate code to interact with your REST API using AutoRest",
          times: {
            start: "17:30 EST",
          },
        },
      ],
    },
  };

  componentWillMount() {
    this.displayNewUnit("EST");
  }

  handleUnitChange(e) {
    e.preventDefault();
    this.displayNewUnit(e.target.value);
  }

  displayNewUnit = (unit) => {
    let tempArr = [];
    if (unit !== this.state.currentUnit) {
      if (unit === "PDT" && this.state.currentUnit === "EST") {
        currentTimeZone = -3;
      } else if (unit === "PDT" && this.state.currentUnit === "UTC") {
        currentTimeZone = -7;
      } else if (unit === "PDT" && this.state.currentUnit === "AEST") {
        currentTimeZone = -17;
      }

      if (unit === "EST" && this.state.currentUnit === "PDT") {
        currentTimeZone = +3;
      } else if (unit === "EST" && this.state.currentUnit === "UTC") {
        currentTimeZone = -4;
      } else if (unit === "EST" && this.state.currentUnit === "AEST") {
        currentTimeZone = -14;
      }

      if (unit === "UTC" && this.state.currentUnit === "EST") {
        currentTimeZone = +4;
        this.setState({
          currentUnit: unit,
        });
      } else if (unit === "UTC" && this.state.currentUnit === "PDT") {
        currentTimeZone = +7;
      } else if (unit === "UTC" && this.state.currentUnit === "AEST") {
        currentTimeZone = -10;
      }

      if (unit === "AEST" && this.state.currentUnit === "EST") {
        currentTimeZone = +14;
      } else if (unit === "AEST" && this.state.currentUnit === "PDT") {
        currentTimeZone = +17;
      } else if (unit === "AEST" && this.state.currentUnit === "UTC") {
        currentTimeZone = +10;
      }
      this.setState({
        currentUnit: unit,
      });
    }
    //--------------------------//

    this.state.schedules.a.map((schedule) => {
      schedule.times.start = this.changeTimeUnit(schedule.times.start, unit);
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
    if (currentTimeZone < 0) {
      for (let i = 0; i < Math.abs(currentTimeZone); i++) {
        newHour -= 1;
        if (newHour < 0) {
          newHour = 23;
        } else if (newHour >= 24) {
          newHour = 0;
        }
      }
    } else {
      for (let i = 0; i < Math.abs(currentTimeZone); i++) {
        newHour += 1;
        if (newHour < 0) {
          newHour = 24;
        } else if (newHour >= 24) {
          newHour = 0;
        }
      }
    }
    return newHour;
  }

  changeTimeUnit = (value, unit) => {
    let dayTime = "PM";
    let splitted = value.split(":");
    let hourInt = parseInt(splitted[0]);
    let hour = this.convertHourToUTC(hourInt);
    if (hour < 12 || hour === 24) {
      dayTime = "AM";
    }
    let minutes = splitted[1].slice(0, 3);
    if (hour > 12) {
      return `${this.checkIfZero(hour - 12)}:${minutes}${dayTime} ${unit}`;
    } else {
      return `${this.checkIfZero(hour)}:${minutes}${dayTime} ${unit}`;
    }
  };

  checkIfZero(hour) {
    if (hour < 10) {
      return `0${hour}`;
    } else {
      return hour;
    }
  }
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
            Saturday June 20th 2020
          </p>
          <select
            className="schedule__unit-conversion"
            onChange={(e) => this.handleUnitChange(e)}
            e=""
            id=""
          >
            <option value="EST">EST</option>
            <option value="PDT">PDT</option>
            <option value="UTC">UTC</option>
            <option value="AEST">AEST</option>
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
