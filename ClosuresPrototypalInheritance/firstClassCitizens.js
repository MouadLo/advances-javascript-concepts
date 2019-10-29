// Function are first class citizines in JS

// 1 function can be assigned to variables
var stuff = function() { }

// 2 pass functions as arguments 
function a(fn) {
    fn()
}
a(function () { console.log('hi there')}); 


// 3 return function as value from other functions
function b() {
    return function c() { console.log('bye') }
}
b()();
var d = b();
d();