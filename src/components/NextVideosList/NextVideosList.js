import React from "react";
import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";

class NextVideosList extends React.Component {
  render() {
    // console.log(this.props.nextData);
    let videos = this.props.nextData;
    return (
      <section className="next">
        <h6 className="next__header">NEXT VIDEO</h6>
        <div className="next__list">
          {videos.map((video) => {
            return (
              <NextVideo
                key={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default NextVideosList;
