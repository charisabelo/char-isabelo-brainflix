import videos from "../../data/videos.json";
import "./Hero.scss";
import Main from "../Main/Main";

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero__video--container">
          <video className="hero__video" poster={videos[0].image}></video>
        </div>
        <div className="hero__controls-container">
          <div className="hero__controls">
            <div className="hero__play-container">
              <span className="material-icons hero__play-icon">play_arrow</span>
            </div>
            <div className="hero__scrubber-container">
              <div className="hero__scrubber"></div>
            </div>
            <div className="hero__tools-container">
              <span className="material-icons hero__fullscreen-icon">
                fullscreen
              </span>
              <span className="material-icons hero__sound-icon">volume_up</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Main /> */}
    </div>
  );
}

export default Hero;
