const obj = {
    two() {
        return 2;
    }
}
console.log(obj.two());

function three() {
    return 3;
}

three.name = 'la';
console.log(three.call());

// Function contructor
const four = new Function('num','return num');
console.log(four(4));

