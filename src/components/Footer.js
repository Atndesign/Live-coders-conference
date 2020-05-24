import React, { Component } from "react";

let now = new Date();
let currentYear = now.getFullYear();

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="footer" className="footer">
        <h2>You can follow us on:</h2>
        <div className="footer__socials">
          <a
            href="http://livecoders.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              srcSet="./img/icons/globe.svg"
              src="./img/icons/globe.png"
              alt="Globe"
              className="footer-socials__icon"
              width="14"
              height="14"
            />
          </a>
          <a
            href="https://twitter.com/thelivecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              srcSet="./img/icons/twitter.svg"
              src="./img/icons/twitter.png"
              alt="twitter"
              className="footer-socials__icon"
              width="15"
              height="13"
            />
          </a>
          <a
            href="https://www.twitch.tv/thelivecoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              srcSet="./img/icons/twitch.svg"
              src="./img/icons/twitch.png"
              alt="twitch"
              className="footer-socials__icon"
              width="15"
              heigt="15"
            />
          </a>
          <a
            href="https://www.instagram.com/thelivecoders/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              srcSet="./img/icons/instagram.svg"
              src="./img/icons/instagram.png"
              alt="Instagram"
              className="footer-socials__icon"
              width="16"
              height="15"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCz7iLJYRhzoSVIXZ2dESzuw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              srcSet="./img/icons/youtube.svg"
              src="./img/icons/youtube.png"
              alt="Youtube"
              className="footer-socials__icon"
              width="17"
              height="15"
            />
          </a>
        </div>
        <div className="container">
          <p>
            © {currentYear} Kevin Moulun/TheLiveCoders, All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
