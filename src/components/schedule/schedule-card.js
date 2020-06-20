import React, { Component } from "react";

class ScheduleCard extends Component {
  state = {};
  checkIfZero(hour) {
    if (hour < 10) {
      return `0${hour}`;
    } else {
      return hour;
    }
  }
  render() {
    let avatar;
    if (this.props.infos.avatar !== "") {
      avatar = this.props.infos.avatar;
    } else {
      avatar = "./img/speakers/placeholder.jpg";
    }
    const time = this.props.infos.times.start;
    let newTime = time.split(":")[0];
    let rest = time.split(":")[1];
    if (newTime > 12) {
      newTime -= 12;
    }

    return (
      <div className="col-lg-4 col-md-6 schedule-card__container-col">
        <div
          className="schedule-card"
          data-aos="fade-right"
          data-aos-delay={50 * this.props.index}
          data-aos-offset="-100"
        >
          <div className="schedule-card__avatar">
            <div
              className="schedule-avatar__container"
              style={{
                backgroundImage: "url(" + avatar + ")",
              }}
            ></div>
          </div>
          <div className="schedule-card__infos">
            <p className="schedule-card__title">
              <strong>{this.props.infos.speaker}</strong>
            </p>
            <p className="schedule-card__title">{this.props.infos.title}</p>
            <div className="schedule-infos__time">
              <span className="schedule__time">
                <img
                  srcSet="./img/icons/watch-purple.svg"
                  src="./img/icons/watch-purple.png"
                  alt="watch"
                  className="schedule-time__watch"
                />
                {`${this.checkIfZero(newTime)}:${rest}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleCard;
