import React from "react";
import "./Upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

const Upload = () => {
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
            className="upload__form"
            id="upload-form"
            autocomplete="off"
            action=""
          >
            <div className="upload__title-container">
              <label className="upload__title-label" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <input
                name="title"
                type="text"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload__description-container">
              <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
              <textarea name="description"></textarea>
            </div>
          </form>
        </div>
        <button type="submit" form="">
          CANCEL
        </button>
        <button type="submit" form="upload-form">
          PUBLISH
        </button>
      </div>
    </div>
  );
};

export default Upload;
