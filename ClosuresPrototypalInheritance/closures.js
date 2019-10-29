function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        let random = 1575254551;
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`;
        };
    };
}

console.log(a()()());

const one = a();
const two = one();
console.log(two);



const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);

boo('hi')('tim')('becca');

booString = boo('hi');
// 5 years
booStringName = booString();
booStringName();

// Exercise 
function  callMeMayBe() {
    setTimeout(function() {
        console.log(callMe);
    }, 4000);

    const callMe = 'Hi! I am now here!';
}

callMeMayBe();