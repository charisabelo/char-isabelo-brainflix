import "./Hero.scss";
import Main from "../Main/Main";
import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import { api, url } from "../../Utils";
import axios from "axios";

class Hero extends React.Component {
  state = {
    data: [],
    selectedVideo: null,
  };

  fetchVideo = (videoId) => {
    axios.get(`${url}videos/${videoId}${api}`).then((res) => {
      this.setState({
        selectedVideo: res.data,
      });
    });
  };

  componentDidMount() {
    const currentVideo = this.props.match.params.id;

    axios.get(`${url}videos${api}`).then((res) => {
      this.setState({
        data: res.data,
      });

      const firstVideo = res.data[0];
      const videoToLoad = currentVideo ? currentVideo : firstVideo.id;

      this.fetchVideo(videoToLoad);
    });
  }

  componentDidUpdate(prevProps) {
    const currentVideoId = this.props.match.params.id;
    const prevVideoId = prevProps.match.params.id;

    if (currentVideoId !== prevVideoId) {
      this.fetchVideo(currentVideoId);
    }
  }

  render() {
    return (
      <div>
        <HeroVideo selectedVideo={this.state.selectedVideo} />
        <Main
          data={this.state.data}
          currentVideo={this.state.selectedVideo}
          handleClick={this.currentVideo}
        />
      </div>
    );
  }
}

export default Hero;
