const express = require("express");
const app = express();
const apiRouter = require("./routers/api-router");
const cors = require("cors");
const {
  handle404s,
  handlePSQLErrors,
  handleCustomError,
} = require("./controllers/errorHandling");

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.use("*", handle404s);
app.use(handlePSQLErrors);
app.use(handleCustomError);
module.exports = app;
