import React from "react";
import "./NextVideo.scss";
import { Link } from "react-router-dom";

class NextVideo extends React.Component {
  render() {
    const { data, image, title, channel } = this.props;
    return (
      <Link to={`/videos/${data.id}`} className="next__container">
        <div className="next__image-container">
          <div
            className="next__image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="next__info-container">
          <p className="next__info-title">{title}</p>
          <p className="next__info-channel">{channel}</p>
        </div>
      </Link>
    );
  }
}

export default NextVideo;
