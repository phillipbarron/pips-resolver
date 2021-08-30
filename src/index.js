const express = require('express')
const app = express()
const port = 3000

app.get('/pips/:pid', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Pips Resolver listening on http://localhost:${port}`)
})