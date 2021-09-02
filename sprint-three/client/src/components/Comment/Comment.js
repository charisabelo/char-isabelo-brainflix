import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  render() {
    const { timestamp, name, comment } = this.props;

    const unixDate = timestamp;
    let date = new Date(unixDate);
    const newDateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    let dateFormatted = date.toLocaleString("en-US", newDateOptions);
    return (
      <div className="comment">
        <div className="comment__user-photo">
          <div className="comment__user-img"></div>
        </div>
        <div className="comment__info-container">
          <div className="comment__user-info">
            <p className="comment__user-name">{name}</p>
            <p className="comment__user-date">{dateFormatted}</p>
          </div>
          <div className="comment__paragraph">{comment}</div>
        </div>
      </div>
    );
  }
}

export default Comment;
