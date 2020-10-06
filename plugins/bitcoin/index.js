const axios = require('axios')

async function getBitcoinPrice() {
  const response = await axios.get('https://api.kraken.com/0/public/Trades?pair=XXBTZUSD')
  if (response && response.data) {
    console.log(response.data);
    const { length } = response.data.result.XXBTZUSD
    const price = parseFloat(response.data.result.XXBTZUSD[length - 1][0])
    console.log(price);
    return price;
  }
  return null;
}

module.exports = { getBitcoinPrice };
