//create a maker function called quo. It makes an object with get_status method and private status property
//make an instance of quo

// var quo = function(status) {
//     return {
//         get_status: function () {
//             return status;
//         }
//     };
// };
//
// var myQuo = quo("happy");
// console.log(myQuo.get_status());

//make a function that assigns event handler to an array of nodes. When you click on a node, an alert box will display the ordinal of the node

var add_the_handlers = function (nodes)  {
    var helper = function (i) {
        return function (e) {
            alert(i)
        };
    };

    var i;
    for ( i = 0; i < nodes.length; i +=1) {
        nodes[i].onclick = helper(i);
    }
}
