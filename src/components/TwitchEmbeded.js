import React, { Component } from "react";
import ReactDOM from "react-dom";

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class TwitchEmbeded extends Component {
  componentDidMount() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <div id={this.props.targetID}></div>
      </div>
    );
  }
}

TwitchEmbeded.defaultProps = {
  targetID: "twitch-embed",
  width: "100%",
  height: "480",
  channel: "thelivecoders",
};

export default TwitchEmbeded;
