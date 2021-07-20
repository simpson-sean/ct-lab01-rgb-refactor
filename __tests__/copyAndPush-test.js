//Test to validate function that copies an existing array and returns it a number added to the end

//import functions
import numPush from '../functions/copyAndPush.js';

describe('copyAndPush', () => {
    it('copies an array and adds a value to the end', () => {
        const numArray = [1, 2, 3];
        const expected = [1, 2, 3, 4];
        const actual = numPush(numArray, 4);

        expect(actual).toEqual(expected);

    });

describe('copyAndPush', () => {
    it('makes copy of array and adds 4 to the end', () => {
        const numArray = [1, 2, 3];    
        const numArrayCopy = numArray; //creates copy of original array
        const expected = [1, 2, 3, 4]; 
        const actual = numPush(numArrayCopy, 4); //push 4 to copy of original array

        expect(actual).toEqual(expected);
    })
})

});