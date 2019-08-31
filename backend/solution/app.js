const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser')

const PORT = 3000

// Express Plugins
app.use(bodyParser.json())

// Routes
const todoRoutes = require('./routes/todo')

app.get('/', (req, res) => {
  res.send("Hola soy Express!")
})
app.use('/todo', todoRoutes)
  
app.listen(PORT, () => {
  console.log(`Express server has started at localhost:${PORT}`)
})