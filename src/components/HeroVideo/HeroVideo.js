import React from "react";
import "./HeroVideo.scss";

class HeroVideo extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__video--container">
          <video
            className="hero__video"
            poster={this.props.selectedVideo.image}
          ></video>
        </div>
        <div className="hero__controls-container">
          <div className="hero__controls">
            <div className="hero__play-container">
              <span className="material-icons hero__play-icon">play_arrow</span>
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
              <span className="material-icons hero__sound-icon">volume_up</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroVideo;
