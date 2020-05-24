import React, { Component } from "react";

class ScheduleCard extends Component {
  state = {};
  render() {
    return (
      <div className="schedule-card">
        <div className="schedule-card__avatar">
          <div
            className="schedule-avatar__container"
            style={{ backgroundImage: "url(" + this.props.infos.avatar + ")" }}
          ></div>
        </div>
        <div className="schedule-card__infos">
          <p className="schedule-card__title">{this.props.infos.title}</p>
          <div className="schedule-infos__time">
            <span className="schedule__time">
              <img
                srcSet="./img/icons/watch-purple.svg"
                src="./img/icons/watch-purple.png"
                alt="watch"
                className="schedule-time__watch"
              />
              {this.props.infos.times.start}
            </span>
            <img
              srcSet="./img/icons/arrrow-black.svg"
              src="./img/icons/arrrow-black.png"
              className="schedule-time__arrow"
              alt="arrow"
            />
            <span className="schedule__time">
              <img
                srcSet="./img/icons/watch-purple.svg"
                src="./img/icons/watch-purple.png"
                alt="watch"
                className="schedule-time__watch"
              />
              {this.props.infos.times.start}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleCard;
