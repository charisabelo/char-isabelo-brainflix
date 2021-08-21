import React from "react";
import "./NextVideo.scss";

class NextVideo extends React.Component {
  render() {
    return (
      <div
        className="next__container"
        onClick={() => {
          this.props.handleClick(this.props.data.id);
        }}
      >
        <div className="next__image-container">
          <div
            className="next__image"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
        </div>
        <div className="next__info-container">
          <p className="next__info-title">{this.props.title}</p>
          <p className="next__info-channel">{this.props.channel}</p>
        </div>
      </div>
    );
  }
}

export default NextVideo;
