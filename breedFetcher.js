
const request = require('request');

const args = process.argv.slice(2)[0];
console.log(args);
const breedfetcher = (() => {
    const url = `https://api.thecatapi.com/v1/breeds/search?name=${args}`;
    //const url = `https://api.thecatapi.com/v1/images/search?breed_id=${args}`;
    request(`${url}`, (error, response, body) => {
        if (error) {
            console.log('error:', error);

        }
        else {
            const data = JSON.parse(body);


            if (data.length > 0) {
                console.log(data[0].description);
            }
            else {
                console.log("cat not found");
            }

        }
    });

});


breedfetcher();