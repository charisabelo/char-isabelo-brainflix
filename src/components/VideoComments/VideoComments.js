import React from "react";
import "./VideoComments.scss";
import Comment from "../Comment/Comment";

class VideoComments extends React.Component {
  render() {
    // console.log(this.props.data[0].comments);
    let currentVideoComments = this.props.data[0].comments;
    // console.log(currentVideoComments);

    return (
      <section className="comments">
        <div className="comments__count">
          <h3>{this.props.data[0].comments.length} comments</h3>
        </div>
        <div className="comments__form-container">
          <div className="comments__user-container">
            <div className="comments__user"></div>
          </div>
          <div className="comments__comment-area">
            <form className="comments__form" action="">
              <div className="comments__label-container ">
                <label className="comments__label" htmlFor="comment">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  className="comments__textarea"
                  name="comment"
                  id="comment"
                  placeholder="Write comment here"
                ></textarea>
              </div>

              <input className="comments__btn" type="submit" value="COMMENT" />
            </form>
          </div>
        </div>
        <div className="comments__list">
          {currentVideoComments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default VideoComments;
