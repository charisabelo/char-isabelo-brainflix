import VideoInfo from "../VideoInfo/VideoInfo";
import "./Main.scss";
import React from "react";
import NextVideosList from "../NextVideosList/NextVideosList";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <VideoInfo currentVideo={this.props.currentVideo} />
        <NextVideosList
          data={this.props.data}
          currentVideo={this.props.currentVideo}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

export default Main;
