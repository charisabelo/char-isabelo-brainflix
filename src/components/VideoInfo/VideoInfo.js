import "./VideoInfo.scss";
import VideoComments from "../VideoComments/VideoComments.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import React from "react";

class VideoInfo extends React.Component {
  render() {
    return (
      <div className="details__container">
        <VideoDetails data={this.props.data} />
        <VideoComments data={this.props.data} />
      </div>
    );
  }
}

export default VideoInfo;
