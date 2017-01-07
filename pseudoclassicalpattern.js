//define a constructor and augment its prototype

var Mammal = function (name) {
   this.name = name;
}

Mammal.prototype.get_name = function () {
    return this.name;
}

Mammal.prototype.says = function () {
    return this.saying || '';
}

//make an instance

var myMamal = new Mammal('Herb the Mamal');
var name = myMamal.get_name();

console.log(name);

//make a another pseudoclass that inherits from Mamal by defining its constructor function and replacing it's prototype with an instance of Mammal

var Cat = function (name) {
   this.name = name;
   this.saying = 'meuw';
};

Cat.prototype = new Mammal;

//augument the new prototype with purr and get_name methods

Cat.prototype.purr = function (n) {
    var i; s = '';
    for (i = 0; i < n; i += 1){
        if (s) {
           s += '-';
        }
        s += 'r';
    }
    return s;
};

Cat.prototype.get_name = function () {
    return this.says() + '' + this.name + '' + this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();

console.log(says, purr, name);
