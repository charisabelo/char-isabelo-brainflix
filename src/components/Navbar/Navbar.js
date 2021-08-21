import logo from "../../assets/Logo/Logo-brainflix.svg";
import "./Navbar.scss";
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="header__nav">
        <div className="header__logo-container">
          <a href="/">
            <img className="header__logo" src={logo} alt="brainflix logo" />
          </a>
        </div>
        <div className="header__form-container">
          <form className="header__form" action="">
            <input
              className="header__search"
              type="text"
              placeholder="Search"
              required
            />
            <div className="header__btn-container">
              <input className="header__btn" type="submit" value="UPLOAD" />
              <div className="header__user-photo"></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar;
