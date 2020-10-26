const client = require('.');
 

client.companyPeers("aapl", (error, data, response) => {
    console.log(data)
});

