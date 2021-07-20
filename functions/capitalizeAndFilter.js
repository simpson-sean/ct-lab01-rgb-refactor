//function that takes in array, capitilizes all stings, and filters out F/f

function capitalizeAndFilter(someArray) {
    const capitalizer = someArray.map(someArray => someArray.toUpperCase());
    const filterOutF = capitalizer.map(item => {
        return item.replace('F', '')
    })
    
    console.log(capitalizer);

    return filterOutF;
};

export default capitalizeAndFilter;