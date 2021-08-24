import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Upload from "../../pages/Upload/Upload";
import React from "react";
import { Switch, Route } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hero}></Route>
          <Route path="/upload" component={Upload}></Route>
          {/* <Route path="/upload" component={Upload}></Route> */}
        </Switch>
      </header>
    );
  }
}

export default Header;
