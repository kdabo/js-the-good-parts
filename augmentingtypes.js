Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);

});

String.method('trim', function () {
   return this.replace(/^\s+|\s+$/g, '');
});

console.log('"' + " neat ".trim() + '"');

console.log((-10 / 3).integer());