const finnhub = require('finnhub');
 
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
if (!process.env.finnhubApiKey)
  throw Error('Failed to Initialize Finnhub, missing API key');
api_key.apiKey = process.env.finnhubApiKey
const finnhubClient = new finnhub.DefaultApi()

module.exports = finnhubClient;
