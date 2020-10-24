const finnhub = require('finnhub');
 
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "" // Replace this
const finnhubClient = new finnhub.DefaultApi()
 
// Stock candles
// finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
//     console.log(data)
// });

finnhubClient.companyNews("ADT", "2020-05-01", "2020-10-20", (error, data, response) => {
  if (error) {
      console.error(error);
  } else {
      console.log(JSON.stringify(data))
  }
});
