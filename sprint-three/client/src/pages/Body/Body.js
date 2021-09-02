import "./Body.scss";
import Main from "../Main/Main";
import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import axios from "axios";

class Body extends React.Component {
  state = {
    data: [],
    selectedVideo: null,
  };

  abortController = new AbortController();

  fetchVideo = (videoId) => {
    axios
      .get(`http://localhost:8080/videos/${videoId}`, {
        signal: this.abortController.signal,
      })
      .then((res) => {
        this.setState({
          selectedVideo: res.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    const currentVideo = this.props.match.params.id;

    axios
      .get(`http://localhost:8080/videos/`, {
        signal: this.abortController.signal,
      })
      .then((res) => {
        this.setState({
          data: res.data,
          isLoading: false,
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

  componentWillUnmount() {
    this.abortController.abort();
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
