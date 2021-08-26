import React from "react";
import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";
import { TextBlock } from "react-placeholder/lib/placeholders";

class NextVideosList extends React.Component {
  render() {
    if (!this.props.currentVideo) {
      return <TextBlock rows={3} color="#e0e0e0" />;
    }

    let videosList = this.props.data;
    let filteredArray = videosList.filter(
      (video) => video.id !== this.props.currentVideo.id
    );

    return (
      <section className="next">
        <h6 className="next__header">NEXT VIDEO</h6>
        <div className="next__list">
          {filteredArray.map((video) => {
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
          })}
        </div>
      </section>
    );
  }
}

export default NextVideosList;
