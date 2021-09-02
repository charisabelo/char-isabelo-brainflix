import "./Body.scss";
import Main from "../Main/Main";
import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import { api, url } from "../../Utils";
import axios from "axios";

class Body extends React.Component {
  state = {
    data: [],
    selectedVideo: null,
  };

  fetchVideo = (videoId) => {
    axios
      .get(`${url}videos/${videoId}${api}`)
      .then((res) => {
        this.setState({
          selectedVideo: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
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

    const first = this.state.data[0].id;

    currentVideoId && currentVideoId !== prevVideoId
      ? this.fetchVideo(currentVideoId)
      : this.fetchVideo(first);
  }

  render() {
    return (
      <>
        <HeroVideo selectedVideo={this.state.selectedVideo} />
        <Main data={this.state.data} currentVideo={this.state.selectedVideo} />
      </>
    );
  }
}

export default Body;
