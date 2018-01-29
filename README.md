# yeti-echo
---------------------

**How to use this?**
Add a `/echo` GET route in your app so you will receibe echoes in this route. Additionally, create a `setTimeInterval` that sends to the echo server a POST request with the server to keep alive url. Check the example:

```
const express = require("express")
const bodyParser = require("body-parser")


const app = express()

app.use(bodyParser.json())

morgan("tiny")

app.get("/echo", (req, res) => {
  res.json({ success: 1, message: 'Echo received' })
})

app.listen(8080)
```