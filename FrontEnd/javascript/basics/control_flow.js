// boolean
// if(condition_1){
// } else if(condition_2){
// } 
// ...
// else if(condition_n){
// }

// >=, >, <, <=, ==, != compare value by forcing type
// ===,  !== compare type and value

// && and
// || or
// ! not


var condition = true;
if(condition){
    console.log("True");
}

var another_condition = false;
if(another_condition){
    console.log("False");
} else if(!another_condition){
    console.log("True");
}

/// loops

// normal for loop
// for(statement 1; statement 2; statement 3)
// statement 1 is executed (one time) before the execution of the code block.
// statement 2 defines the condition for executing the code block.
// statement 3 is executed (every time) after the code block has been executed.
for(var i = 5, len = 7; i <= len ; ++ i){
    console.log(i);
}

// for/in statement loops through the properties of an object:
var person = {fname:"John", lname:"Doe", age:25};
for (var property in person) {
  console.log(property, person[property]);
}

// for/of statement loops through the values of an iterable objects
// for (variable of iterable) {
// code block to be executed
// }
var names = ["Karen", "Sally", "Eld"];
for(var name of names){
    console.log(name);
}
var str = "Hello World!";
for(var char of str){
    console.log(char);
}

// // while loop
// while (condition) {
//     // code block to be executed
// }

condition_4 = true;
while(condition_4){
    console.log("True");
    var date = new Date();
    if(date.getSeconds() % 10 == 0) break;
}