const express = require('express');
const Unblocker = require('unblocker');
const app = express();

const unblocker = new Unblocker({ prefix: '/proxy/' });

// This must be one of the first app.use() calls and must not be on a subdirectory to work properly
app.use(unblocker);

app.get('/', (req, res) => {
  res.send('Welcome to the proxy server!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});