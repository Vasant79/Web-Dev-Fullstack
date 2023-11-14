/**
 * basic webserver -- express framework for node js
 * importing express -- comman js module (node js does support import way)
 * creating instance
 * what type of req to handle -- .get( url , arrow fn)
 * listening on port -- lsof -i :5000 -- to see which process is using this port
 * to kill the process -- kill -9 <PID>
 */

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "Web server working" });
});

app.listen(3001);
