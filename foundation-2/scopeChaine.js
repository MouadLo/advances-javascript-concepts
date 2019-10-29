function sayMyName() {
    var a = "a";
    return function findName() {
        var b = 'b';
        return function printName() {
            var c = 'c';
            return 'Mouad Lousimi'
        }
    }
}

