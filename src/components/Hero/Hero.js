import videos from "../../data/video-details.json";
import "./Hero.scss";
import Main from "../Main/Main";
import React from "react";

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
    // console.log(videos);
    return (
      <div>
        <div className="hero">
          <div className="hero__video--container">
            <video
              className="hero__video"
              poster={this.state.selectedVideo.image}
            ></video>
          </div>
          <div className="hero__controls-container">
            <div className="hero__controls">
              <div className="hero__play-container">
                <span className="material-icons hero__play-icon">
                  play_arrow
                </span>
              </div>
              <div className="hero__scrubber-container">
                <div className="hero__scrubber"></div>
                <div className="hero__scrubber-time hero__scrubber-time--hidden">
                  <span>0:00</span>
                  <span>/</span>
                  <span>0:42</span>
                </div>
              </div>
              <div className="hero__tools-container">
                <span className="material-icons hero__fullscreen-icon">
                  fullscreen
                </span>
                <span className="material-icons hero__sound-icon">
                  volume_up
                </span>
              </div>
            </div>
          </div>
        </div>
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
