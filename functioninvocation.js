var add = function (a, b) {
    return a+b;
}

//myObject has a value and an increment method. The increment method takes an optional parameter. If the argument is not a number, than 1 is used as a default.

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

myObject.double = function () {

    var that = this;

    var helper = function () {
        that.value = add(that.value, that.value);
    };

    helper();
};

myObject.double();
console.log(myObject.value);

