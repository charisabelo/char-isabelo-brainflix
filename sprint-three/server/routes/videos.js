const express = require("express");
const router = express.Router();
const videos = require("../data/videos.json");
const uuid = require("uuid");

let videosBasicDetails = videos.map((video) => {
  const newObj = {
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
    description: video.description,
  };
  return newObj;
});

router.get("/videos", (req, res) => {
  return res.status(200).json(videosBasicDetails);
});

router.get("/videos/:id", (req, res) => {
  console.log(req.params);
  const video = videos.find((video) => video.id === req.params.id);

  if (video) {
    res.json(video);
  } else {
    res.status(400).json({ msg: `No video with the id of ${req.params.id}` });
  }
});

router.post("/videos", (req, res) => {
  let newVideo = {
    id: uuid.v4(),
    title: req.body.title,
    channel: "Web Dev Simplified",
    image: "../public/images/Upload.jpg",
    description: req.body.description,
  };

  videos.push(newVideo);
  res.json(videos);
});

module.exports = router;
