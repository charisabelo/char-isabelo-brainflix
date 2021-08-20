import React from "react";
import "./NextVideosList.scss";
import NextVideo from "../NextVideo/NextVideo";

class NextVideosList extends React.Component {
  render() {
    // console.log(this.props.nextData);
    let video = this.props.nextData[0];
    return (
      <section className="next">
        <h6 className="next__header">NEXT VIDEO</h6>
        <div className="next__list">
          {/* <NextVideo key={} title={} channel={}/> style={{backgroundImage: {}}}*/}
          <NextVideo />
        </div>
      </section>
    );
  }
}

export default NextVideosList;
