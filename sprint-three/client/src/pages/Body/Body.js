import "./Body.scss";
import Main from "../../components/Main/Main";
import React from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import axios from "axios";

class Body extends React.Component {
  state = {
    data: [],
    selectedVideo: null,
  };

  fetchVideo = (videoId) => {
    axios
      .get(`http://localhost:8080/videos/${videoId}`)
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

    axios
      .get("http://localhost:8080/videos")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .then(() => {
        const firstVideo = this.state.data[0];
        const videoToLoad = currentVideo ? currentVideo : firstVideo.id;

        this.fetchVideo(videoToLoad);
      });
  }

  componentDidUpdate(prevProps) {
    const currentVideoId = this.props.match.params.id;
    const prevVideoId = prevProps.match.params.id;

    if (currentVideoId && currentVideoId !== prevVideoId) {
      return this.fetchVideo(currentVideoId);
    }
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
