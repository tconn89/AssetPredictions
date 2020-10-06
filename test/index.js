const { expect } = require('chai');
const { getBitcoinPrice } = require('../plugins/bitcoin');

describe("Get Bitcoin Price", function() {
  it('Awaits network requesta', async function() {
    const price = await getBitcoinPrice();
    expect(typeof(price)).to.equal('number');
  })
});
