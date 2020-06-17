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
                      src: "alexa.png",
                      alt: "Alexa logo",
                      width: "239",
                      height: "336",
                      link:
                        " https://developer.amazon.com/en-US/alexa/alexa-live?&sc_category=Earned&sc_channel=RD&sc_campaign=AL2020_Twitch&sc_publisher=Twitch&sc_content=Invitation&sc_detail=Twitch&sc_funnel=Promote&sc_country=US&sc_medium=Earned_RD_AL2020_Twitch_Twitch_Invitation_Twitch_Promote_US_AllDevs&sc_segment=AllDevs",
                    }}
                  />
                  <SponsorCard
                    info={{
                      src: "progress.png",
                      alt: "Progress logo",
                      width: "239",
                      height: "197",
                      link: "https://www.twitch.tv/codeitlive",
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
                  <SponsorCard
                    info={{
                      src: "kontent.png",
                      alt: "Kontent logo",
                      width: "239",
                      height: "75",
                      link: "https://rebrand.ly/dgtkontent",
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
