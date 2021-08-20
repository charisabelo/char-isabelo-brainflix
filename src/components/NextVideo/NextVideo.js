import React from "react";
import "./NextVideo.scss";

class NextVideo extends React.Component {
  render() {
    // console.log(this.props);
    // let checkStringLength =
    //   this.props.title.length < 34
    //     ? this.props.title
    //     : this.props.title.substring(0, 34) + "...";

    return (
      <div className="next__container">
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
// style={{ backgroundImage: `url(${video.image})` }}

export default NextVideo;
