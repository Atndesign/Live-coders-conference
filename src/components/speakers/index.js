import React, { Component } from "react";
import SpeakerCard from "./speaker-card";

let speakers = [
  {
    avatar: "./img/speakers/JeffFritz.jpg",
    name: "Jeff Fritz",
    twitchName: "CSharpFritz",
    title: "Native Code, WebAssembly, and C# - Build with Blazor",
    time: "09:00 AM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/csharpfritz",
      twitter: "https://twitter.com/csharpfritz",
      github: "http://github.com/csharpfritz",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/JemimaAbu.jpg",
    name: "Jemima Abu",
    twitchName: "",
    title: "Manipulating Webpages using DevTools",
    time: "09:30 AM EST",
    socialsLink: {
      twitch: "",
      twitter: "https://www.twitter.com/jemimaabu",
      github: "https://www.github.com/jemimaabu",
      linkedin: "https://www.linkedin.com/in/jemimaabu",
    },
  },
  {
    avatar: "./img/speakers/JimmyEngstrom.jpg",
    name: "Jimmy Engström",
    twitchName: "codingafterwork",
    title: "Blazor Web Bluetooth",
    time: "10:00 AM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/codingafterwork",
      twitter: "https://twitter.com/EngstromJimmy ",
      github: "https://github.com/EngstromJimmy/",
      linkedin: "https://www.linkedin.com/in/engstromjimmy/",
    },
  },
  {
    avatar: "./img/speakers/KassandraWren.jpg",
    name: "Kassian Rosner Wren",
    twitchName: "Nodebotanist",
    title: "Creating User Engagement with (ro)bots",
    time: "10:30 AM EST",
    socialsLink: {
      twitch: "https://twitch.tv/nodebotanist",
      twitter: "https://twitter.com/nodebotanist",
      github: "https://github.com/nodebotanist",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/Sadukie.jpg",
    name: "Sarah Dutkiewicz",
    twitchName: "Sadukie",
    title: "Data Adventures with Azure Notebooks",
    time: "11:00 AM EST",
    socialsLink: {
      twitch: "",
      twitter: "https://twitter.com/sadukie",
      github: "",
      linkedin: "https://linkedin.com/in/sadukie",
    },
  },
  {
    avatar: "./img/speakers/JamesMontemagno.jpg",
    name: "James Montemagno",
    twitchName: "",
    title: "Building a Friend System with No Servers & No Usernames",
    time: "11:30 AM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/jamesmontemagno",
      twitter: "https://twitter.com/jamesmontemagno",
      github: "https://github.com/jamesmontemagno",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/Aaron.jpg",
    name: "Aaron Brooks",
    twitchName: "Mastermnd",
    title: "DevOps, We’ll do it Live: Movie Trailer Edition",
    time: "12:30 AM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/mastermndio",
      twitter: "https://twitter.com/mastermndio",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/JeffBlankenburg.jpg",
    name: "Jeff Blankenburg",
    twitchName: "jeff blankenburg",
    title: "How to Build Your First Alexa Skill",
    time: "01:00 PM EST",
    socialsLink: {
      twitch: "http://twitch.tv/jeffblankenburg",
      twitter: "http://twitter.com/jeffblankenburg",
      github: "",
      linkedin: "http://linkedin.com/in/jeffblankenburg",
    },
  },
  {
    avatar: "./img/speakers/ninaz.jpg",
    name: "Nina Zakharenko",
    twitchName: "Nnjaio",
    title: "Light Up Your Life, With Python and LEDs!",
    time: "01:30 PM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/nnjaio",
      twitter: "https://twitter.com/nnja/",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/MarkMiller.jpg",
    name: "Mark Miller",
    twitchName: "Coderushed",
    title: "The Science of Great UI",
    time: "02:00 PM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/coderushed",
      twitter: "https://twitter.com/millermark",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/BryanRobinson.jpg",
    name: "Bryan Robinson",
    twitchName: "",
    title: "Join the CSS Future with CSS Grid",
    time: "02:30 PM EST",
    socialsLink: {
      twitch: "https://twitch.tv/bryanlrobinson",
      twitter: "https://twitter.com/brob",
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
    time: "03:30 PM EST",
    socialsLink: {
      twitch: "",
      twitter: "https://twitter.com/JoeKarlsson1",
      github: "",
      linkedin: "https://www.linkedin.com/in/joekarlsson/",
    },
  },
  {
    avatar: "./img/speakers/Instafluff-Raphael-Mun.jpg",
    name: "Raphael Mun",
    twitchName: "Instafluff",
    title: "Game Design is a Science!",
    time: "04:00 PM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/Instafluff",
      twitter: "https://twitter.com/InstafluffTV",
      github: "https://github.com/instafluff",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/MikoCharbonneau.jpg",
    name: "Dr. Miko Charbonneau",
    twitchName: "DrMikachu",
    title: "Picking the Right Game Engine",
    time: "04:30 PM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/drmikachu",
      twitter: "https://twitter.com/DrMikachu/",
      github: "",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/ArenDavey.jpg",
    name: "Aren Davey",
    twitchName: "CozyCoding",
    title: "An Indoctrination to the Cult of Geometry via JavaScript",
    time: "05:00 PM EST",
    socialsLink: {
      twitch: "https://www.twitch.tv/cozycoding",
      twitter: "https://twitter.com/aah_dee_",
      github: "https://github.com/aahdee",
      linkedin: "",
    },
  },
  {
    avatar: "./img/speakers/TylerLeonhardt.jpg",
    name: "Tyler Leonhardt",
    twitchName: "",
    title: "Auto generate code to interact with your REST API using AutoRes",
    time: "05:30 PM EST",
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
