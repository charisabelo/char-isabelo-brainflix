import logo from "../../assets/Logo/Logo-brainflix.svg";
import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__logo-container">
          {/* <Link to={`/video/1af0jruup5gu`}> */}
          <Link to="/">
            <img className="nav__logo" src={logo} alt="brainflix logo" />
          </Link>
        </div>
        <div className="nav__form-container">
          <form className="nav__form" action="">
            <input
              className="nav__search"
              type="text"
              placeholder="Search"
              required
            />
          </form>
          <div className="nav__btn-container">
            <Link to="/upload" className="nav__btn">
              UPLOAD
            </Link>
            <div className="nav__user-photo"></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
