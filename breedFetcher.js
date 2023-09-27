
const request = require('request');

const breedfetcher = ((breadname, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?name=${breadname}`;
  //const url = `https://api.thecatapi.com/v1/images/search?breed_id=${args}`;
  request(`${url}`, (error, response, body) => {
    if (error) {
      console.log('error:', error);

    } else {
      const data = JSON.parse(body);


      if (data.length > 0) {
        callback(null, data[0].description);

      } else {
        callback(error, null);

      }

    }
  });

});

module.exports = { breedfetcher };