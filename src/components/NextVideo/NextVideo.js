import React from "react";
import "./NextVideo.scss";

class NextVideo extends React.Component {
  render() {
    return (
      <div className="next__container">
        <div className="next__image-container">
          <div className="next__image"></div>
        </div>
        <div className="next__info-container">
          <p className="next__info-title">
            Become A Travel Pro In One Easy Lesson
          </p>
          <p className="next__info-channel">Todd Welch</p>
        </div>
      </div>
    );
  }
}

export default NextVideo;
