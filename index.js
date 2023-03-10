const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:4000/events", event).catch((_) => {});
  axios.post("http://localhost:4001/events", event).catch((_) => {});
  axios.post("http://localhost:4002/events", event).catch((_) => {});
  axios.post("http://localhost:4003/events", event).catch((_) => {});

  res.send({ status: "OK" });
});

app.get("/events", (_, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on port 4005");
});
