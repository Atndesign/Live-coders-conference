import React, { Component } from "react";

class SpeakerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-6 col-6 speaker__card-col">
        <div className="speaker__card">
          <div
            className="speaker-card__pic"
            style={{
              backgroundImage: "url(" + this.props.current.avatar + ")",
            }}
          ></div>
          <p className="speaker-card__name">{this.props.current.name}</p>
          <p className="speaker-card__title">{this.props.current.title}</p>
          <p className="speaker-card__time">{this.props.current.time}</p>
          <div className="speaker-card__socials">
            {this.props.current.socialsLink.twitch !== null && (
              <a href="/">
                <img
                  srcSet="./img/icons/twitch.svg"
                  src="./img/icons/twitch.png"
                  alt="twitch"
                  className="speaker-card__social-icon"
                />
              </a>
            )}
            {this.props.current.socialsLink.twitter !== null && (
              <a href="/">
                <img
                  srcSet="./img/icons/twitter.svg"
                  src="./img/icons/twitter.png"
                  alt="twitter"
                  className="speaker-card__social-icon"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SpeakerCard;
