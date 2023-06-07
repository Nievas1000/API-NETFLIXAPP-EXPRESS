const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

const moviesRouter = require("./routes/moviesRoute.js");
const seriesRouter = require("./routes/seriesRoute.js");
app.use("/", moviesRouter);
app.use("/", seriesRouter);

app.listen(3001, () => {
  console.log("Server run on port " + 3001);
});
