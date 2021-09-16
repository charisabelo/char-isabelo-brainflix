const express = require("express");
const videos = require("./routes/videos");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming Request");
  next();
});

app.use("/", videos);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Running`);
});
