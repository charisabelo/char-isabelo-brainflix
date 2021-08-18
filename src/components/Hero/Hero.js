import videos from "../../data/videos.json";
import "./Hero.scss";

function Hero() {
  //   console.log(videos[0].image);

  return (
    <div className="hero">
      <video className="hero__video" poster={videos[0].image}></video>
    </div>
  );
}

export default Hero;
