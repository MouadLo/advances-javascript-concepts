var b = {
    name: 'Jay b' ,
    say() { console.log(this) }
}

var c = {
    name: 'jay c',
    say() {return function() { console.log(this)}}
}

var d = {
    name: 'jay d',
    say() { return () => console.log(this)}
}

console.log('b: ',b.say());

console.log('c: ',c.say()());

console.log('d: ',d.say()());