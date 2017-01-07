var fibonacci =(function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n-1) + fib (n-2);
            console.log('the first log', result)
            memo[n] = result;
            console.log('the second log', memo[n])
        }
        return result;
    };
    return fib;
    console.log('the third log', fib)
}());

var memoizer = function(memo, formula) {
    var recur = function(n) {
        var result = memo[n];
        console.log('the fourth log', result)
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
        console.log(' ')
    };
    return recur;
};

var fibonnacci = memoizer([0, 1], function (recur, n) {
    return recur(n-1) + recur(n-2);
});

console.log(fibonnacci);


var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n-1);
});
console.log(factorial);
console.log(fibonacci);
