import "./Body.scss";
import Main from "../Main/Main";
import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import { api, url } from "../../Utils";
import axios from "axios";

let source = axios.CancelToken.source();

class Body extends React.Component {
  state = {
    data: [],
    selectedVideo: null,
  };

  fetchVideo = (videoId) => {
    axios
      .get(`${url}videos/${videoId}${api}`, { cancelToken: source.token })
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
    source = axios.CancelToken.source();
    const currentVideo = this.props.match.params.id;

    axios
      .get(`${url}videos${api}`, { cancelToken: source.token })
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
    source.cancel("component unmounted");
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
