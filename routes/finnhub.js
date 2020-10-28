const finnhubClient = require('../plugins/finnhub');
 
const express = require('express');

const router = express.Router();
const moment = require('moment');


console.log('Initializing finnhub routes');
router.get('/news/:company', (req, res) => {
  const company = req.params.company;
  if (!company) return res.status(400).send({ error: 'No company param provided'})

  const end = moment().format('YYYY-MM-DD');
  const start = moment().subtract(5, 'months').format('YYYY-MM-DD')
  
  finnhubClient.companyNews(company, start, end, (error, data, response) => {
    if (error) {
        console.error(error);
        return res.send({ error })
    } else {
        console.log(JSON.stringify(data))
        return res.send({ body: data })
    }
  });
});

// Stock candles
// finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
//     console.log(data)
// });

module.exports = router;
