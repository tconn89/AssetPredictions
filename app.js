const serverless = require('serverless-http');
const express = require('express');
const app = express();

const assetRoutes = require('./routes/assetValues');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/assets', assetRoutes);

app.post('/', (req, res) => {
  res.send({ ...req.body });
});

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});


//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);
