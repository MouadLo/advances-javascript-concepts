
var a = 5;
var b = 6;

b++;

console.log(a);


let obj1 = { 
    name: 'Mouad',
    password: '1245',
    attribute : {
         deep: 'try and copy me'
    }
};

let obj2 = obj1;
let clone = Object.assign({}, obj1);
let clone2 = { ...obj1 };

// Deep cloning shlow cloning
let superClone = JSON.parse(JSON.stringify(obj1));

obj1.attribute.deep = 'hahaha';


console.log(obj1);
console.log(clone);
console.log(clone2);
console.log(superClone);

var arry1 = [1, 2, 3, 4, 5];
var arry2 = arry1;

var arry3 = [].concat(arry1);

arry2.push(15422);

console.log(arry1);
console.log(arry2);
console.log(arry3);