//string.charAt(pos) --> returns a string
var name = 'Curly';
var initial = name.charAt(0);

console.log(initial);

//string.charCodeAt(pos) --> returns integer representation of the code point value of the character at position pos
var pointValue = name.charCodeAt(3);

console.log(pointValue);

//string.concat(string...) --> returns a new string by concatinating other strings together
var s = 'C'.concat('a', 't');

//string.indexOf(searchString, position) --> indexOf method searches for a searcString within a string.
//if found, returns the position of the first matched character, otherwise it returns -1
var text = 'Missisipi';
// var p = text.indexOf('ss');
p = text.indexOf('ss', 2);
console.log(p);

//string.lastIndexOf(searchString, position) --> indexOf method searches for a searcString within a string, starts search from an end of string.

//string.localeCompare(that) --> compares two strings
var m = ['aaa', 'a', 'aa'];
m.sort(function (a, b) {
    return a.localeCompare(b)
});
console.log(m);

//string.match(rexexp)
var text = '<html><body bgcolor="#faf0e6"><p>' +
        "This is <b>bold<\/b>!<\/p><\/body><\/html>";
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;
a = text.match(tags);
for (i=0; i < a.length; i += 1) {
    console.log(('//[' + i + '] ' + a[i]));
};

//string.replace(searchValue, replaceValue) --> search and replace operation on this string producing a new string. searchValue can be a string or regular expression object
//if a string replaes only first occurence. if regular expression, and if it has -g flag than it will replace all occurances
//replaceValue can be a string or a function. if a string the character $ has a special meaning
//if function, it will be called for each match,a nd returned string will be used as the replacment text
var oldcode = /\((\d{3})\)/g;
var p = '(555)666-1212'.replace(oldcode, '$1-');
console.log(p);

//string.search(regex)
var text = 'and than he says "any dam fool can';
var pos = text.search(/["']/);
console.log(pos);

//string.slice(start, end)
var a = text.slice(18);
console.log(a);

//string.split(separator, limit) --> creates an array of strings bly splitting the strings into pieces. separator can be string o regular expression
var digits = '0123456789'
var a = digits.split('', 5)
console.log(a);

var ip = '192.168.1.0';
var b = ip.split('.');
var c = 'a|b|c'.split('|');
console.log(b, c);
