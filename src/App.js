import React from "react";
import "./assets/css/App.css";

import Speakers from "./components/speakers";
import Schedules from "./components/schedule";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/">
          <img
            srcSet="./img/logo-purple.svg"
            src="./img/logo-purple.png"
            alt="logo"
            className="header__logo"
            height="34"
            width="34"
          />
        </a>
        <button className="header__menu mobile-only">
          <img
            srcSet="./img/icons/menu-purple.svg"
            src="./img/icons/menu-purple.png"
            alt=""
            className="header__menu-icon"
          />
        </button>
        <nav className="desktop-only">Hello world</nav>
      </header>
      <section className="hero">
        <img
          src="./img/banner.png"
          className="img-fluid hero__banner"
          alt="banner"
        />
        <div className="container">
          <h1 className="hero__title">The live coders conference</h1>
          <p className="hero__date">June 20, 2020</p>
          <p className="hero__text">
            An online-only conference put on by The Live Coders team on Twitch!
            You may be wondering who we are! We are The Live Coders, an outgoing
            and enthusiastic group of friendly channels that write code, teach
            about technology, and promote the technical community. With
            conferences everywhere being cancelled or postponed, we didn't want
            to let prepared talks to go waste and decided to put on a free
            (all-day) online conference for everyone on Twitch, with talks
            covering various topics. To stay up to date with announcements about
            the conference, please follow us on Twitter! Once we have scheduled
            our speakers, we will publish the information below!
          </p>
        </div>
      </section>
      <Speakers />
      <Schedules />
    </div>
  );
}

export default App;
