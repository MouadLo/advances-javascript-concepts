// Primitive
console.log(typeof 4);
console.log(typeof true);
console.log(typeof 'to be or not to be');
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol('Just me'));
console.log(typeof Infinity);

// Non-Primitive
const obj1 = {
    a: 'Tom'
}

console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){ });

console.log(true.toString());

function a() {
    return 5;
}

a.hi = Number("15.5");

console.log(a.hi);