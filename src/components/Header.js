import React, { Component } from "react";

let classes;

class Header extends Component {
  state = {
    open: false,
  };

  open = () => {
    this.setState({
      open: true,
    });
  };

  close = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    if (this.state.open === false) {
      classes = "header__menu-mobile mobile-only";
    } else {
      classes = "header__menu-mobile mobile-only open";
    }

    console.log(classes);
    return (
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
        <button
          className="header__menu mobile-only"
          onClick={(e) => this.open(e)}
        >
          <img
            srcSet="./img/icons/menu-purple.svg"
            src="./img/icons/menu-purple.png"
            alt=""
            className="header__menu-icon"
          />
        </button>
        <div className={classes}>
          <button
            className="header-mobile__close"
            onClick={(e) => this.close(e)}
          >
            <img
              srcSet="./img/icons/cross.svg"
              src="./img/icons/cross.png"
              alt="close"
            />
          </button>
          <nav className="header-mobile__nav ">
            <ul className="mobile-nav__list">
              <li className="nav-list__item">
                <a href="#">Home</a>
              </li>
              <li className="nav-list__item">
                <a href="#speakers">Speakers</a>
              </li>
              <li className="nav-list__item">
                <a href="#schedules">Schedules</a>
              </li>
              <li className="nav-list__item">
                <a href="#sponsors">Sponsors</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="desktop-only header__nav-desktop">
          <ul className="desktop-nav__list">
            <li className="nav-list__item">
              <a href="#">Home</a>
            </li>
            <li className="nav-list__item">
              <a href="#speakers">Speakers</a>
            </li>
            <li className="nav-list__item">
              <a href="#schedules">Schedules</a>
            </li>
            <li className="nav-list__item">
              <a href="#sponsors">Sponsors</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
