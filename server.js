const morgan = require('morgan')
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()

morgan('tiny')
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const { echo } = req.body

  if (!echo) res.json({error: 'Missing echo inside body'})

  setTimeout(() => {
    const { url } = echo
    axios.get(url)
      .then(r => console.log(r.data))
 }, 2000) // three minutes

  res.json({success: 1, message: 'Echo scheduled'})
})

app.listen(8080)