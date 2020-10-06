const uuid = require('uuid');
const dynamoDb = require('../db');
const { getBitcoinPrice } = require('../plugins/bitcoin')

const create = async (req, res) => {
  const { type, asset, value } = req.body;
  if (!value) return res.status(400).send({ message: 'value field is required'});
  if (!asset) return res.status(400).send({ message: 'asset field is required'});

  const price = await getBitcoinPrice();
  if (!price) return res.status(500).send({ message: 'Failed to get bitcoin price'})

  const params = {
    TableName: 'AssetValue',
    Item: {
      assetId: uuid.v1(),
      type: type || 'PREDICTION',
      asset,
      price,
      value,
      createdAt: Date.now(),
    },
  };
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
        
      return res.status(error.statusCode || 501).send({
        message: `Couldn\'t create the Asset of type ${params.Item.type}.`,
        error,
      });
      
    }

    const response = {
      statusCode: 200,
      item: params.Item,
    };
    res.send(response);
  });
}

const read = (req, res) => {
  if (!req.params.id)
    return res.status(400).send({ error: 'Missing ID'});

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
};

const list = (req, res) => {

  const params = {
    TableName: 'AssetValue',
  };

  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(error.statusCode || 501).send({
        message: 'Couldn\'t fetch the assets.',
        error,
      });
    }

    const response = {
      statusCode: 200,
      items: result.Items,
    };

    res.send(response)
  });
}

module.exports = { create, read, list };
