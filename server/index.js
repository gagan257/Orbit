const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to (CORS) CHANGE IT WITH DEPLOYED URL OF SITE IN PRODUCTION
    method: ["GET", "POST"],
    credentials: true,
  })
);

mongoose
  .connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
});
