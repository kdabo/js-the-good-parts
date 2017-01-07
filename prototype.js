var stooge = {
    first_name: 'Jerome'
}

var x = stooge;
console.log(x);

x.nickname = 'Curly';
console.log(x)


//add create method to object function. the create method creates a new object that uses an old object as its prototype
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }
}

var another_stooge = Object.create(stooge);
console.log(another_stooge);