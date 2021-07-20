//Test for fetching Futurama Quotes

//Import Functions
//import fetch from 'node-fetch';
import getFuturamaQuotes from '../functions/fetchQuotes.js';
import mungedFuturamaQuotes from '../functions/fetchQuotes.js';

describe('fetchQuotes', () => {
    it('fetches quotes from a futurama API and presents specific values', async () => {
        const quotes = await mungedFuturamaQuotes();
        
        expect(quotes).toEqual({ name:expect.any(String), text:expect.any(String), image:expect.any(String)});
    })
})