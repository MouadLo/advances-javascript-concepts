const array = [1, 2, 10, 16];

const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
});


console.log(newArray);
console.log(double);

// map, filter, reduce

const mapArray = array.map((num) => {
    return num * 2;
});

console.log(mapArray);

const filterArray = array.filter(num => {
    return num > 5
});

console.log(filterArray);

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);

console.log(reduceArray);