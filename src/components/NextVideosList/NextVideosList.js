import React from "react";
import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";

class NextVideosList extends React.Component {
  render() {
    let videos = this.props.data;

    return (
      <section className="next">
        <h6 className="next__header">NEXT VIDEO</h6>
        <div className="next__list">
          {videos.map((video) => {
            if (video.id !== this.props.currentVideo.id) {
              return (
                <NextVideo
                  data={video}
                  key={video.id}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                  handleClick={this.props.handleClick}
                />
              );
            }
          })}
        </div>
      </section>
    );
  }
}

export default NextVideosList;
