// 1 : gives methods access to their object
// 2 : execute same code for multiple objects

function importantPerson() {
    console.log(this.name + '!!!');
}

var name = 'Sunny';

const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}

const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

importantPerson();
obj1.importantPerson();
obj2.importantPerson();

// const obj = {
//     name: 'Billy',
//     sing()  {
//         return 'lalala ' + this.name;
//     },
//     singAgain() {
//         return this.sing()  + ' !';
//     }
// }

// console.log(obj.sing());

// console.log(obj.singAgain());