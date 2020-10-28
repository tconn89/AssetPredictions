const client = require('.');
 

client.companyPeers("tsla", (error, data, response) => {
    console.log(data)
});

