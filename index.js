const express = require('express');
const app = express();
const port = 3000;
const api = require('./app/routes/api');

app.use('/api', api);

app.listen(port, () => {
   console.log(`App started at ${port}`);
});