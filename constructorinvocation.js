//create a constructor function called quo. It makes an object with a status property. (defining the class)
var Quo = function (string) {
    this.status = string;
}

//give all instances of quo a public method
//called get status (define the method for the class)
Quo.prototype.get_status = function() {
    return this.status;
}

//instantiate the class and store the result of instantiation into my qup
var myQuo = new Quo('confused');

//calls the method using the just instantiated method
console.log(myQuo.get_status());


//make na object with a status member
var statusObject = {
    status: 'A-OK'
};

//statusObject does not inherit from Quo.prototype,
//but we can invoke the get_status method on statusObject even though
//statusObject does not have a get_status method
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);