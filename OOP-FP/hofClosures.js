// HOF
const oof = (fn) => fn(5);
console.log(oof(a => a * 2));

// Closure
const closure = () => {
    let count = 0;

    return () => {
        count++;
        return count;
    }
}

const increment = closure();

console.log(increment());
console.log(increment());
console.log(increment());