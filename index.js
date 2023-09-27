const { breedfetcher } = require('./breedFetcher');
// index.js

const breedName = process.argv[2];

breedfetcher(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});