//2 ways of creating reg exp

// 1. by using rexexp literal
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

var blanks = '                    ';

var i;
for (i = 0; i<names.length; i+=1){
    console.log(names[i] + ':' + blanks.substring(names[i].length), result[i]);
    // url:                  http://www.ora.com:80/goodparts?q#fragment
    // scheme:               http
    // slash:                //
    // host:                 www.ora.com
    // port:                 80
    // path:                 goodparts
    // query:                q
    // hash:                 fragment
}


// from / to / => beginning and the end of regex

// ^ indicates the beginning of the string and anchor that prevents exec from skipping over a non URL like prefix

// (?:([A-Za-z]+):)? =>this factor matches a scheme name , but only if it is followed by :(colon)

// ?: indicates a non capturing group

// ? indicates that group is optional. repeat zero or one time

// (...) indicates a capturing group which copies the text it matches and places it in result array. Each capturing group is given a number. the first group is 1

// A-Za-z => contains 26 letters lower and uppercase, hyphens indicate range where + indicates that the character class will be matched one or more times
//and than followed by : which means it will be matched literally

//(\/{0,3}) => \/ indicates a slash caracter should be matched and escaped by backslash so that it is not missinterpreted as the end of regex, {0, 3} means that / will be matched 0 or 1 or 2 or 3 times

//([0-9.\-A-Za-z]+) the third group will match a host name made up of 1 or more digits, letters or . or -

// (?::(\d+))? => matches a port number

//(?:\/([^?#]*))? => [^?#] => class includes all characters except ? and # and * indicates that the character class is matched zero or more times

//btw this is sloppoy example which is a popular source of security exploits

//$ represents the end of the string

/// 2. by using regexp constructor

var my_regexp = new RegExp("'(?:\\\\.|[^\\\\\\'])*'", 'g');

function make_a_matcher(){
    return /a/gi;
}

var x = make_a_matcher();
var y = make_a_matcher();

x.lastIndex = 10;

console.log(x.lastIndex);