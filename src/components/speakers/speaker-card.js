import React, { Component } from "react";

class SpeakerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let avatar;
    if (this.props.current.avatar !== "") {
      avatar = this.props.current.avatar;
    } else {
      avatar = "./img/speakers/placeholder.jpg";
    }
    return (
      <div
        className="col-lg-3 col-md-4 col-6 speaker__card-col"
        data-aos="fade-right"
        data-aos-delay={100 * this.props.index}
      >
        <div className="speaker__card">
          <div
            className="speaker-card__pic"
            style={{
              backgroundImage: "url(" + avatar + ")",
            }}
          ></div>
          <p className="speaker-card__name">
            {this.props.current.name +
              (this.props.current.twitchName &&
                ` (${this.props.current.twitchName})`)}
          </p>
          <p className="speaker-card__title">{this.props.current.title}</p>
          <p className="speaker-card__time">{this.props.current.time}</p>
          <div className="speaker-card__socials">
            {this.props.current.socialsLink.github !== "" && (
              <a
                href={this.props.current.socialsLink.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  srcSet="./img/icons/github.svg"
                  src="./img/icons/github.png"
                  alt="github"
                  className="speaker-card__social-icon"
                />
              </a>
            )}
            {this.props.current.socialsLink.linkedin !== "" && (
              <a
                href={this.props.current.socialsLink.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  srcSet="./img/icons/linkedin.svg"
                  src="./img/icons/linkedin.png"
                  alt="linkedin"
                  className="speaker-card__social-icon"
                />
              </a>
            )}
            {this.props.current.socialsLink.twitch !== "" && (
              <a
                href={this.props.current.socialsLink.twitch}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  srcSet="./img/icons/twitch.svg"
                  src="./img/icons/twitch.png"
                  alt="twitch"
                  className="speaker-card__social-icon"
                />
              </a>
            )}
            {this.props.current.socialsLink.twitter !== "" && (
              <a
                href={this.props.current.socialsLink.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
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
