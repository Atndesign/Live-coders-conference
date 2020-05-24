import React from "react";
import "./assets/css/App.css";
import AOS from "aos";

import Header from "./components/Header";
import Speakers from "./components/speakers";
import Schedules from "./components/schedule";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import TwitchEmbeded from "./components/TwitchEmbeded";

AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="hero__title">The live coders conference</h1>
              <p className="hero__date">June 20, 2020</p>
              <p className="hero__text">
                An online-only conference put on by The Live Coders team on
                Twitch! You may be wondering who we are! We are The Live Coders,
                an outgoing and enthusiastic group of friendly channels that
                write code, teach about technology, and promote the technical
                community. With conferences everywhere being cancelled or
                postponed, we didn't want to let prepared talks to go waste and
                decided to put on a free (all-day) online conference for
                everyone on Twitch, with talks covering various topics. To stay
                up to date with announcements about the conference, please
                follow us on Twitter! Once we have scheduled our speakers, we
                will publish the information below!
              </p>
            </div>
            <div className="col-lg-6">
              <TwitchEmbeded />
              <div id="hel"></div>
            </div>
          </div>
        </div>
      </section>
      <Speakers />
      <Schedules />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
