import React, { Component } from "react";
import SpeakerCard from "./speaker-card";

let speakers = [
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jeff Fritz",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jemina Abu",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jimmy Engström",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Trezy",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Dutkiewicz",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "James Montemagno",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jason Harrison",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/JeffBlankenburg.jpg",
    name: "Jeff Blankenburg",
    twitchName: "jeff blankenburg",
    title: "How to Build Your First Alexa Skill",
    time: "10:00 AM PDT",
    socialsLink: {
      twitch: "http://twitch.tv/jeffblankenburg",
      twitter: "http://twitter.com/jeffblankenburg",
      github: "",
      linkedin: "http://linkedin.com/in/jeffblankenburg",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Mark Miller",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Bryan Robinson",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/JoeKarlsson.jpg",
    name: "Joe Karlsson",
    twitchName: "",
    title:
      "An Introduction To IoT (Internet of Toilets); Or How I built an IoT Kitty Litter Box Using JavaScript",
    time: "12:30 PM PDT",
    socialsLink: {
      twitch: "",
      twitter: "https://twitter.com/JoeKarlsson1",
      github: "",
      linkedin: "https://www.linkedin.com/in/joekarlsson/",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Raphael Mun",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Miko Charbonneau",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },

  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Mahmood Hikmet",
    twitchName: "sorskoot",
    title: "How to build a WebXR Game in 13KB",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "",
      twitter: "",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Tyler Leonhardt",
    twitchName: "TylerLeonhardt",
    title: "Auto generate code to interact with your REST API using AutoRes",
    time: "12:15 pm PDT",
    socialsLink: {
      twitch: "https://twitch.tv/TylerLeonhardt",
      twitter: "https://twitter.com/TylerLeonhardt",
      github: "https://twitter.com/TylerLeonhardt",
      linkedin: "https://www.linkedin.com/in/tylerjamesleonhardt/",
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
            {speakers.map((e, index) => (
              <SpeakerCard current={e} key={e.name} index={index} />
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
