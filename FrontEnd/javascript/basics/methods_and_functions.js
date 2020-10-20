// call method by using
// <object>.<method_name>.();
console.clear();


// call funtion by using
// <function_name>.()
function myFunc(var1, var2){
    return var1 * var2;
}

var myFunc = function(var1, var2){
    return var1 * var2;
}

var num = myFunc(2, 3);
console.log(num);

// arrow function
const square = (x) => {
    return x * x;
}
const sum = (x, y) => {
    return x + y;
}

// arrow function implicit return
const getSix = () => (6);

// this in arrow function
var obj = {
    firstName: "Khai",
    lastName: "Dong",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    shoutName: function(){
        setTimeout(() => {
            // by using arrow function the this is the object instead of the window
            console.log(this.fullName());
        }, 3000);

        // setTimeout(function() {
        //     console.log(this) // window;
        // }, 3000);
    }
}