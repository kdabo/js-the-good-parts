

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log(typeof a);
        throw {
            name:'TypeError',
            message: 'add needs numbers'
        };
    }
    var v  = a + b
    return v
}

var a = 1;
var b = 7;

var result = add(a, b);

console.log(result);

var try_it = function (a, b) {
    try {
        var ret = add(a,b);
        return ret
    } catch (e) {
        console.log(e.name + ':' + e.message);
    }
}

var result2 = try_it(3, 10);
console.log(result2);
