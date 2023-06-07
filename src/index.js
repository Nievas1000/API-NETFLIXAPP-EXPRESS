const express = require("express");
const app = express();
app.use(express.json());

const moviesRouter = require("./routes/moviesRoute.js");
const seriesRouter = require("./routes/seriesRoute.js");
app.use("/", moviesRouter);
app.use("/", seriesRouter);

app.listen(3001, () => {
  console.log("Server run on port " + 3001);
});
