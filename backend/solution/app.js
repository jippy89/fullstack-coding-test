const express = require('express'),
      app     = express()

const PORT = 3000

// Routes
const todoRoutes = require('./routes/todo')

app.get('/', (req, res) => {
  res.send("Hola soy Express!")
})
app.use('/todo', todoRoutes)
  
app.listen(PORT, () => {
  console.log(`Express server has started at localhost:${PORT}`)
})