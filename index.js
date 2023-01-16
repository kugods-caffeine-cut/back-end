require("dotenv").config();
const express = require("express");
const app = express();
const {connect} = require("./config/mongoose.js");
const path = require("path");

const {rootRouter} = require("./routes");

const port = 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", rootRouter);

app.listen(port, () => {
  console.log(`Caffeine-Cut app listening on port ${port}`);
});
