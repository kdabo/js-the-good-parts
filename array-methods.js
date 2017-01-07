//array method that will allow us to use to do computation on an array
//for each element of the array, call a function with am element and a value and compute a new value
function reduce(f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
};

//create an array of numbers
var data = [4, 8, 15, 16, 23, 42];
console.log(data);

var add = function (a,b) {
    return a+b;
}

var mult = function (a, b) {
    return a*b;
}

//invoke the data's reduce method, passing in add function
var sum = data.reduce(add, 0);
console.log(sum);

//invoke reduce agaian, this time passing mult funcion
var product = data.reduce(mult, 1);
console.log(product);

//give the data array a total function
data.total = function(){
    return this.reduce(add, 0);
};

total = data.total();

console.log(total);