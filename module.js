//produce an object that produces unique strings.
//A unique string is made up of two parts: a prefix and a sequence number.
//the object comes with methods for setting the prefix and sequence number, and a gensym method that produces unique strings.

var serial_maker = function () {
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = p;
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym : function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();

console.log(unique);

var last = seqer.gensym();
console.log(last);
