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


});