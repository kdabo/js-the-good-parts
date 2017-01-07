var Function = {
    method: function add(a, b) {
        return a + b;
    }
};

var add = {
    number: 2,
    curry: function () {
        var slice = Array.prototype.slice;
        var args = slice.apply(arguments);
        return function () {
            console.log( ">>>>>>>>>>>>", arguments)
            return slice.apply(args.concat(slice.apply(arguments)));
        };
    }
};


var add1 = add.curry(1);
console.log(add1(5));