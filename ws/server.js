const express = require('express'),  
  path = require('path'),
  serveStatic = require('serve-static'),
  ws = require('./ws'),
  app = express();


app.use(serveStatic(path.join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});