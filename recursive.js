// var katarina = ["kata", "pescinho", "dorado"];
//
// for (var i = 0; i < katarina.length; i++ ) {
//     console.log(katarina[i])
// }
//
// function iterate(array, i, cb) {
//     var a = array[i];
//     if(a) {
//         console.log(array[i])
//         i++;
//         iterate(array,i,cb)
//     }else{
//         cb()
//     }
//
// }
//
// iterate(katarina,1,function(){
//     console.log("finish")
// });
//
//
// var myBack = ['pain', 'hurt', 'needswimming'];
//
// function goodnight(array, count, whate) {
//     var hey = array[count];
//     if(hey) {
//         console.log(hey)
//         count++;
//         goodnight(array, count, whate)
//     } else {
//         whate()
//     }
// }
//
// goodnight(myBack, 0, function(){
//     console.log("I rule")
// });
//
//
// var hanoi = function hanoi (disc, src, aux, dst) {
//     if (disc > 0) {
//         hanoi(disc - 1, src, dst, aux);
//         console.log("move disc " + disc + ' from ' + src + ' to ' + dst);
//         hanoi(disc -1, aux, src, dst)
//     }
// };
//
// hanoi(3, 'Src', 'Aux', 'Dst');


var walk_the_DOM = function walk(node, func) {
   func (node);
        node = node.firstChild;
        while (node) {
            walk(node, func);
            node = node.nextSibling;
        }
    };

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function(node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
            (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
};

var rez = getElementsByAttribute(alt, string);
console.log(rez);