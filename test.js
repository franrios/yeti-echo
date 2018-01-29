const morgan = require("morgan")
const express = require("express")
const bodyParser = require("body-parser")


const app = express()

app.use(bodyParser.json())

morgan("tiny")

app.post("/", (req, res) => {
  const { test } = req.body
  console.log(test)


  res.json({ success: 1, message: 'Echo received' })
})

app.listen(8080)
