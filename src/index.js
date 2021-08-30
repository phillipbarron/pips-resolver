var parseString = require("xml2js").parseString;
const express = require("express");
const app = express();

const { getAllTheThings } = require('./services/pips-service');
const port = 3000;

const { getPipsResponse } = require("./clients/pips-client");

app.get("/pips/:pid", async (req, res) => {
  const pipdsResponse = await getPipsResponse(req.params.pid);
  parseString(pipdsResponse, function (err, result) {
    console.log({ result });
    res.json(getAllTheThings(result));
  });
});

app.listen(port, () => {
  console.log(`Pips Resolver listening on http://localhost:${port}`);
});
