import React from "react";
import "./Upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { withRouter } from "react-router";

const Upload = ({ history }) => {
  const submitForm = (e) => {
    e.preventDefault();
    history.push("/redirect");
    setTimeout(function () {
      history.push("/");
    }, 2000);
  };

  return (
    <div className="upload">
      <div className="upload__header-container">
        <h1 className="upload__header">Upload Video</h1>
      </div>
      <div className="upload__form-container">
        <div className="upload__form-details">
          <div className="upload__thumbnail-container">
            <p className="upload__thumbnail">VIDEO THUMBNAIL</p>
            <img className="upload__thumbnail-image" src={thumbnail} alt="" />
          </div>
          <form
            onSubmit={submitForm}
            className="upload__form"
            id="upload-form"
            autoComplete="off"
            action=""
          >
            <div className="upload__title-container">
              <label className="upload__title-label" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload__input"
                name="title"
                type="text"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload__description-container">
              <label className="upload__description" htmlFor="description">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload__textarea"
                name="description"
                placeholder="Add a description of your video"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="upload__btn-container">
          <button className="upload__cancel-btn" type="submit" form="">
            CANCEL
          </button>
          <button
            className="upload__publish-btn"
            type="submit"
            form="upload-form"
          >
            PUBLISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Upload);
