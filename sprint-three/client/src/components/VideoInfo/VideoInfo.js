import "./VideoInfo.scss";
import VideoComments from "../VideoComments/VideoComments.js";
import VideoDetails from "../VideoDetails/VideoDetails.js";
import React from "react";

class VideoInfo extends React.Component {
  render() {
    const { currentVideo } = this.props;

    return (
      <div className="details__container">
        <VideoDetails currentVideo={currentVideo} />
        <VideoComments currentVideo={currentVideo} />
      </div>
    );
  }
}

export default VideoInfo;
