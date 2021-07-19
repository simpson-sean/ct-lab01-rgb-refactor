// Create a function that returns the 'name' property of an object


function getName() {
    //Declares myDog and sets object data
    const myDog = { name: 'Parker', age: 4, weight: '65 lbs', breed: 'Blue Healer' };
    //Returns targeted value from myDog object 
    return myDog.name;

};

export default getName;