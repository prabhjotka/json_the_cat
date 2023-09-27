// breedFetcherTest.js

const { breedfetcher } = require('../breedFetcher');
const { assert } = require('chai');

describe('breedfetcher', () => {
    it('returns a string description for a valid breed, via callback', (done) => {
        breedfetcher('Siberian', (err, desc) => {
            // we expect no error for this scenario
            assert.equal(err, null);

            const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

            // compare returned description
            assert.equal(expectedDesc, desc.trim());

            done();
        });
    });
    it('returns a null for a invalid breed, via callback', (done) => {
        breedfetcher("hfjfgj", (err, desc) => {
            // we expect  error for this scenario
            assert.equal(desc, null);

            const expectedDesc = null;

            // compare returned description
            assert.equal(expectedDesc, err);

            done();
        });
    });
    it('returns a null for a invalid breed, via callback', (done) => {
        breedfetcher(null, (err, desc) => {
            // we expect  error for this scenario
            assert.equal(desc, null);

            const expectedDesc = null;

            // compare returned description
            assert.equal(expectedDesc, err);

            done();
        });
    });
});




