const express = require('express'),
      app     = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send("Hola soy Express!")
})
  
app.listen(PORT, () => {
  console.log(`Express server has started at localhost:${PORT}`)
})