import React, { Component } from "react";
import SpeakerCard from "./speaker-card";

let speakers = [
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Timmy Kokke",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "./",
      twitter: "",
    },
  },
];

class Speakers extends Component {
  state = {};
  render() {
    return (
      <section id="speakers" className="speakers">
        <div className="container">
          <h2 className="section__title">The speakers</h2>
          <p className="speakers__desc">
            We have many amazing speakers covering various topics,{" "}
            <span className="speakers-desc--purple">go check them out!</span>
          </p>
          <div className="row">
            {speakers.map((e) => (
              <SpeakerCard current={e} />
            ))}
          </div>
          <p className="speakers__note">
            <span className="speakers__note--purple">Please note</span>: These
            speakers and their topics may be subject to change.
          </p>
        </div>
      </section>
    );
  }
}

export default Speakers;
