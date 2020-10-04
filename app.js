const serverless = require('serverless-http');
const express = require('express');
const uuid = require('uuid');
const app = express();

const assetRoutes = require('./routes/assetValues');
const dynamoDb = require('./db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/assets', assetRoutes);

app.post('/', (req, res) => {
  res.send({ ...req.body });
});

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});

app.post('/api/v1/prediction', (req, res) => {
  console.log(req.body);
  res.send({ ...req.body });
});

app.post('/api/v1/test', (req, res) => {
  console.log(req.body);

  const params = {
    TableName: 'AssetValue',
    Item: {
      assetId: uuid.v1(),
      type: 'PREDICTION',
      asset: 'BITCOIN',
      price: 10617,
      value: 10693,
      createdAt: Date.now(),
    },
  };
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
        
      return res.status(error.statusCode || 501).send({
        message: `Couldn\'t create the Asset of type ${params.Item.type || 'PREDICTION'}.`,
        error,
      });
      
    }

    const response = {
      statusCode: 200,
      item: params.Item,
    };
    res.send(response);
  });
});

app.get('/api/v1/test/:id', (req, res) => {
  if (!req.params.id)
    return res.status(400).send({ error: 'Missing ID'});

  console.log(req.params.id);
  const params = {
    TableName: 'AssetValue',
    Key: {
      assetId: req.params.id,
    },
  };
  dynamoDb.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      return res.status(error.statusCode || 501).send({
        message: 'Couldn\'t fetch the asset.',
        error
      });
    }

    // create a response
    const response = {
      statusCode: 200,
      item: result.Item,
    };
    res.send(response);
  });
});


//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);
