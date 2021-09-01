import React from "react";
import "./NextVideo.scss";
import { Link } from "react-router-dom";

class NextVideo extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/video/${this.props.data.id}`} className="next__container">
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
        </Link>
      </div>
    );
  }
}

export default NextVideo;
