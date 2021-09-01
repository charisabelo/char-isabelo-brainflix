const express = require("express");
const videos = require("./routes/videos");

const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  console.log("Incoming Request");
  next();
});

app.use("/", videos);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
