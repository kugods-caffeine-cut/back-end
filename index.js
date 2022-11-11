import {} from "dotenv/config";
import express from "express";
import "./config/mongoose";

import rootRouter from "./routes/rootRouter";
import apiRouter from "./routes/apiRouter";

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/", rootRouter);
app.use("/coffee", apiRouter);
