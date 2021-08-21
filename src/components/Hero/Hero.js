import videos from "../../data/video-details.json";
import "./Hero.scss";
import Main from "../Main/Main";
import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";

class Hero extends React.Component {
  state = {
    data: videos,
    selectedVideo: videos[0],
  };

  currentVideo = (id) => {
    let newVideo = this.state.data.find((video) => video.id === id);

    this.setState({
      selectedVideo: newVideo,
    });
  };

  render() {
    return (
      <div>
        <HeroVideo selectedVideo={this.state.selectedVideo} />
        <Main
          data={videos}
          currentVideo={this.state.selectedVideo}
          handleClick={this.currentVideo}
        />
      </div>
    );
  }
}

export default Hero;
