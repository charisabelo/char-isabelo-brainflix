import VideoInfo from "../VideoInfo/VideoInfo";
import "./Main.scss";
import React from "react";
import NextVideosList from "../NextVideosList/NextVideosList";

class Main extends React.Component {
  render() {
    const { currentVideo, data } = this.props;

    return (
      <main className="main">
        <VideoInfo currentVideo={currentVideo} />
        <NextVideosList data={data} currentVideo={currentVideo} />
      </main>
    );
  }
}

export default Main;
