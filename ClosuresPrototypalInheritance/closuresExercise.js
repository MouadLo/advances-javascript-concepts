let view;
function initialize() {
    let called = 0;
    console.log('view has been set!');
    return function() {
        if(called > 0) {
            return;
        } else {
            view = '\u{1F32A}';
            called++;
            console.log('view has been set!');
        }
    }
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();

console.log(view);


const array = [1, 2, 3, 4];
for(var i=0; i < array.length; i++) {
    (function(closureI){
        setTimeout(function() {
            console.log('I am at index ' + array[closureI])
        }, 3000)
    })(i)
}