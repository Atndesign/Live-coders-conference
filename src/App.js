import React from "react";
import "./assets/css/App.css";

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
        <button className="header__menu">
          <img
            srcSet="./img/icons/menu-purple.svg"
            src="./img/icons/menu-purple.png"
            alt=""
            className="header__menu-icon"
          />
        </button>
      </header>
    </div>
  );
}

export default App;
