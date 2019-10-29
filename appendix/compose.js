const compose = (f, g) => a => f(a);

const sum = num => num + 1;

console.log(compose(sum, sum)(5));