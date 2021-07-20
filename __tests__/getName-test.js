//Test Driven Development for a function that will pull the name value from an object

//Import function for testing
import getName from '../functions/getName.js';


describe('getName', () => {
    it('takes in an object with multiple values and returns the name value', () => {
        const myDog = { name: 'Parker', age: 4, weight: '65 lbs', breed: "Blue Healer" };
        const expected = 'Parker';
        const actual = getName(myDog)

        expect(actual).toEqual(expected);
    
    });

describe('getName', () => {
    it('takes in an object with mutiple values and returns the name value', () => {
        const character = {_id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        const expected = 'Aang';
        const actual = getName(character);

        expect(actual).toEqual(expected);
    })
})


});