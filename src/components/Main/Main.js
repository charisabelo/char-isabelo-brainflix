import VideoInfo from "../VideoInfo/VideoInfo";
import "./Main.scss";
import React from "react";
import NextVideosList from "../NextVideosList/NextVideosList";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <VideoInfo currentVideo={this.props.currentVideo} />
        <NextVideosList
          data={this.props.data}
          currentVideo={this.props.currentVideo}
        />
      </main>
    );
  }
}

export default Main;
