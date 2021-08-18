import logo from "../../assets/Logo/Logo-brainflix.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="header__nav">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="brainflix logo" />
      </div>
      <div className="header__form-container">
        <form className="header__form" action="">
          <input className="header__search" type="text" />
          <div className="header__btn-container">
            <input className="header__btn" type="submit" />
            <div className="header__user-photo"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
