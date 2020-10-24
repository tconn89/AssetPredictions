const serverless = require('serverless-http');
const express = require('express');
const app = express();

const finnRoutes = require('../routes/finnhub');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api/v1/assets', assetRoutes);
app.use((req, res, next) => {
  console.log(req.url);
  next()
})

app.use('/finn', finnRoutes);

app.get('/finn/alive', (req, res) => {
  res.send({ application: 'real-finn-app', version: '1' });
});


//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);
