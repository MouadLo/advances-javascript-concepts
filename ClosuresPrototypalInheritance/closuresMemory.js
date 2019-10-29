// Memory Efficient
function heavyDuty(index) {
    const bigArray = new Array(7000).fill('\u{1F60A}');
    console.log('created!');
    return bigArray[index];
}

console.log(heavyDuty(686));
console.log(heavyDuty(686));
console.log(heavyDuty(686));

const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(688));
console.log(getHeavyDuty(700));
console.log(getHeavyDuty(800));

function heavyDuty2() {
    const bigArray = new Array(7000).fill('\u{1F60A}');
    console.log('created again!');
    return function(index) {
        return bigArray[index];
    };
}



