//Side effects:
const array = [1, 2, 3];

function mutateArray(arr) {
    const newArray = [].concat(array);
    newArray.pop();
    return newArray;
}

function mutateArray2(arr) {
    arr.forEach(item => arr.push(1))
}
//The order of the function calls will matter.
mutateArray(array)
mutateArray2(array)
array

// map and concat methods can fix this issue of mutation