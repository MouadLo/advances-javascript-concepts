// Higher Order Functions are simply a 
// function that can take a function as an argument
// or functions that returns another functions

const giveAccessTo = (user) => 'Acceess Granted to ' + user;

function authenticate(person) {
    let array = [];
    for(let i = 0; i < person.verifyTime; i++){
        array.push(i)
    }
    return giveAccessTo(person.name);
}

function letPersonLogin(person, fn)  {
    if(person.level === 'admin' ){
        return fn(person);
    } else if(person.level === 'user') {
        return  fn(person);
    }
 
}


console.log(letPersonLogin({ level: 'user', name: 'Eva', verifyTime: 410000 }, authenticate));
console.log(letPersonLogin({ level: 'admin',name: 'Jhon', verifyTime: 1000000 }, authenticate));


const multiplyBy = (num1) => (num2) => num1*num2;
console.log(multiplyBy(3)(45));

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

console.log(multiplyByTwo(4));
console.log(multiplyByTwo(10));
console.log(multiplyByTwo(6));