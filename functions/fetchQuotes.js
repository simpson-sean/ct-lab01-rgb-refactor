//Import tools and functions
import fetch from 'node-fetch';

const getFuturamaQuotes = async () => {
    const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
    const body = await res.json();
    // const quotes = body[0];
    // const mungeQuotes = quotes.map(quote => {
    //     return {
    //         name: quote.character,
    //         text: quote.quote,
    //         image: quote.image,
    //     }
    // });
    return body[0];
    //return mungeQuotes;
    
}

export default getFuturamaQuotes; 


