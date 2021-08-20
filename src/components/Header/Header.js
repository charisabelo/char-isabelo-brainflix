import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar />
        <Hero />
      </header>
    );
  }
}

export default Header;
