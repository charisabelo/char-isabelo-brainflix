import "./VideoInfo.scss";
import VideoComments from "../VideoComments/VideoComments.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import React from "react";

class VideoInfo extends React.Component {
  render() {
    // console.log(this.props.currentVideo);
    return (
      <div className="details__container">
        <VideoDetails currentVideo={this.props.currentVideo} />
        <VideoComments currentVideo={this.props.currentVideo} />
      </div>
    );
  }
}

export default VideoInfo;
