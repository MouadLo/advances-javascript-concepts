// Function scope
// vs
// block scope

function loop() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    } 
    console.log('finaly',i);
    var j = i + 1;
    while(j < 9 ) {
        console.log(j);
        j++;
    } 
    console.log('finaly',j);
}

loop();