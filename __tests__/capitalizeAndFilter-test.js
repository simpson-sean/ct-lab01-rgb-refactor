//Test for capitalizing an array of strings and filtering out F/f

//import functions
import capitalizeAndFilter from '../functions/capitalizeAndFilter.js';

describe('capitalizeAndFilter', () => {
    it('capitalizes an array of strings and filters out F/f', () => {
        const myString = ['cat', 'bat', 'fat', 'rat'];
        const expected = [ 'CAT', 'BAT', 'AT', 'RAT'];
        const actual = capitalizeAndFilter(myString);

        expect(actual).toEqual(expected);

    })
})