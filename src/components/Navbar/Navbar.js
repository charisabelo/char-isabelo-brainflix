import logo from "../../assets/Logo/Logo-brainflix.svg";
import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="header__nav">
        <div className="header__logo-container">
          <Link to="/">
            <img className="header__logo" src={logo} alt="brainflix logo" />
          </Link>
        </div>
        <div className="header__form-container">
          <form className="header__form" action="">
            <input
              className="header__search"
              type="text"
              placeholder="Search"
              required
            />
          </form>
          <div className="header__btn-container">
            <Link to="/upload" className="header__btn">
              UPLOAD
            </Link>
            <div className="header__user-photo"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
