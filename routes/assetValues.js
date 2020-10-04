const express = require('express');

const router = express.Router();

const assetHandler = require('../handlers/assetValues');

router.get('/', assetHandler.list);

router.post('/create', assetHandler.create);

router.get('/:id', assetHandler.read);

module.exports = router;
