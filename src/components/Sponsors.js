import React, { Component } from "react";
import SponsorCard from "./SponsorCard";

class Sponsors extends Component {
  state = {};
  render() {
    return (
      <section id="sponsors" className="sponsors">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section__title">Team Sponsors</h2>
                <div className="row">
              <SponsorCard
                info={{
                  src: "fauna.png",
                  alt: "Fauna logo",
                  width: "239",
                  height: "69",
                  link: "https://fauna.com/",
                }}
              />
               <SponsorCard
                    info={{
                      src: "manning.jpg",
                      alt: "Manning logo",
                      width: "239",
                      height: "37",
                      link: "https://www.manning.com/",
                    }}
                  />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="section__title">Conference Sponsors</h2>
              <div className="sponsors__conf-sponsors">
                <div className="row">
                  <SponsorCard
                    info={{
                      src: "azure.jpg",
                      alt: "Azure logo",
                      width: "229",
                      height: "36",
                      link: "https://azure.microsoft.com/",
                    }}
                  />
                  <SponsorCard
                    info={{
                      src: "GrapeCity.jpg",
                      alt: "GrapeCity logo",
                      width: "181",
                      height: "67",
                      link: "https://grapecity.com",
                    }}
                  />
                  <SponsorCard
                    info={{
                      src: "Nexmo.jpg",
                      alt: "Nexmo logo",
                      width: "239",
                      height: "74",
                      link: "https://developer.nexmo.com/",
                    }}
                  />
                 
                  <SponsorCard
                    info={{
                      src: "CouchBase.jpg",
                      alt: "CouchBase logo",
                      width: "239",
                      height: "75",
                      link: "https://docs.couchbase.com/home/developer.html",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsors;
