const client = require('.');
const fs = require('fs');
 

client.covid19((error, data, response) => {
    fs.writeFile('covid.json', JSON.stringify(data), function (err) {
        if (err) return console.log(err);
        console.log('covid > covid.json');
    });
});

