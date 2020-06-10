import React, { Component } from "react";

class SponsorCard extends Component {
  state = {};
  render() {
    const { src, alt, height, width, link } = this.props.info;
    return (
      <div className="col-md-6 sponsors__logo-container">
        <a href={link} rel="noopener noreferrer" target="_blank">
          <img
            src={`./img/sponsors/${src}`}
            alt={alt}
            height={height}
            width={width}
            className="img-fluid sponsors__logo"
          />
        </a>
      </div>
    );
  }
}

export default SponsorCard;
