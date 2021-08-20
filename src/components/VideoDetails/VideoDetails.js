import React from "react";
import "./VideoDetails.scss";

class VideoDetails extends React.Component {
  render() {
    // console.log(this.props.data);
    const unixDate = this.props.data[0].timestamp;
    let date = new Date(unixDate);
    const newDateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    let dateFormatted = date.toLocaleString("en-US", newDateOptions);

    return (
      <section className="details">
        <div className="details__header-container">
          <h1 className="details__header">{this.props.data[0].title}</h1>
        </div>
        <div className="details__info">
          <div className="details__author-date">
            <p className="details__channel">By {this.props.data[0].channel}</p>
            <p className="details__date-posted">{dateFormatted}</p>
          </div>
          <div className="details__icons-container">
            <div className="details__views-container">
              <div className="details__views-icon"></div>
              <p className="details__views">{this.props.data[0].views}</p>
            </div>
            <div className="details__likes-container">
              <div className="details__likes-icon"></div>
              <p className="details__likes">{this.props.data[0].likes}</p>
            </div>
          </div>
        </div>
        <div className="details__description-container">
          <p className="details__description">
            {this.props.data[0].description}
          </p>
        </div>
      </section>
    );
  }
}

export default VideoDetails;
