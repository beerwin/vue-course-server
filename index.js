const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const api = require('./app/routes/api');
app.use(cors({
   origin: '*',
   optionsSuccessStatus: 200
}));
app.use(express.json());
app.use('/api', api);

app.listen(port, () => {
   console.log(`App started at ${port}`);
});