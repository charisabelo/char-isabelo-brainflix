const express = require("express");
const router = express.Router();
const videos = require("../data/videos.json");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

let videosBasicDetails = videos.map((video) => {
  const newObj = {
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
  };
  return newObj;
});

router.get("/videos", (req, res) => {
  return res.status(200).json(videosBasicDetails);
});

router.get("/videos/:id", (req, res) => {
  const video = videos.find((video) => video.id === req.params.id);

  if (video) {
    res.json(video);
  } else {
    res.status(400).json({ msg: `No video with the id of ${req.params.id}` });
  }
});

router.post("/videos", (req, res) => {
  const videoArr = fs.readFile(
    path.resolve(__dirname, "../data/videos.json"),
    "utf8",
    (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
      try {
        const arr = JSON.parse(jsonString);
        let newVideo = {
          id: uuid.v4(),
          title: req.body.title,
          channel: "Web Dev Simplified",
          comments: [],
          timestamp: Date.now(),
          image: "/Images/Upload-video-preview.jpg",
          description: req.body.description,
        };
        arr.push(newVideo);
        fs.writeFile(
          path.resolve(__dirname, "../data/videos.json"),
          JSON.stringify(arr, null, 2),
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }
    }
  );
});

module.exports = router;
