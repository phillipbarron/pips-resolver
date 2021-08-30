var parseString = require('xml2js').parseString;
const express = require('express')
const app = express()
const port = 3000

const { getPipsResponse } = require('./clients/pips-client');

app.get('/pips/:pid', async (req, res) => {
  const pipdsResponse = await getPipsResponse(req.params.pid)
  const asJson = parseString(pipdsResponse);
  parseString(pipdsResponse, function (err, result) {
    console.log({pipdsResponse, asJson })
    // const asJsonObject =  JSON.parse(asJson)
    res.json(result)
});


})

app.listen(port, () => {
  console.log(`Pips Resolver listening on http://localhost:${port}`)
})