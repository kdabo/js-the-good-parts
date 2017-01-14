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

//concat
var myArray = ['a', 'b', 'c'];
var mySecondArray = [1, 2, 3];

var sum = myArray.concat(mySecondArray);
console.log(sum);

var array2 = ['br', 'hr'],
	array4 = ['de', 'hr', 'fr'],
	array6 = ['ht', 'yu'];

var sum2 = array2.concat(array4, array6);
console.log(sum2)

//join
var whatever = ['snow', 'rain', 'sun'];
var newWhatever = whatever.join();
var newWhatever2 = whatever.join(' + ');
console.log(newWhatever);
console.log(newWhatever2);

//pop
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myFish.pop();
console.log(myFish)

//push
var sports = ['soccer', 'baseball'];
var total = ['swimming','diving'];

Array.prototype.push.apply(total, sports);
var total = sports.push('swimming','diving');
console.log(total)

//apply
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables);
console.log(moreVegs);

//slice
var myHonda = {
	color: 'red',
	wheels: 4,
	engine: {
		cylinders: 4,
		size: 2.2
	}
};

var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);
console.log(newCar);

//splice
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(removed);

//sort, this method sort numbers, but doesn't sort things
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort();

var scores = [1, 10, 2, 21];
scores.sort();

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort();


//if we want to sort array of simple values, create comparison function

var m = ['aa', 'bb', 'a', 'b', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});

console.log(m);


