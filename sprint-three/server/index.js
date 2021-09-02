const express = require("express");
const videos = require("./routes/videos");
const app = express();
const cors = require("cors");

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming Request");
  next();
});

app.use("/", videos);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
