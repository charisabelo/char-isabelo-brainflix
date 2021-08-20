import VideoInfo from "../VideoInfo/VideoInfo";
import "./Main.scss";
import React from "react";
import data from "../../data/video-details.json";
import nextVideosData from "../../data/videos.json";
import NextVideosList from "../NextVideosList/NextVideosList";

class Main extends React.Component {
  state = {
    videoData: data,
    nextVideos: nextVideosData,
  };

  render() {
    return (
      <div className="main">
        <VideoInfo data={this.state.videoData} />
        <NextVideosList nextData={this.state.nextVideos} />
      </div>
    );
  }
}

export default Main;
