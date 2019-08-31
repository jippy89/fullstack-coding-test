const http = require('http')

const PORT = 3000

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})

app.listen(PORT, () => {
  console.log(`Server has started at localhost:${PORT}`)
})