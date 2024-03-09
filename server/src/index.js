const express = require("express");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");
const connect = require("./config/database");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log("Server started at port ", PORT);
  await connect();
  console.log("mongoDB connected");
});
