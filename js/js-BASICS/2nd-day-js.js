// ** conditional statements **
//  in js we have 3 types of conditional statements
// 1. if
// if(condition){
//     // code
// }



// 2. else if
// else if(condition){
//     // code
// }



// 3. else
// else{
//     // code
// }


var mynum = 10;
var mynum2 = 20;
if (mynum > mynum2) {
    console.log("mynum is greater than mynum2");
} else if (mynum < mynum2) {
    console.log("mynum is less than mynum2");
} else {
    console.log("mynum is equal to mynum2");
}


// 4. switch
// switch (expression) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code
//         break;
// }

var mynum = 10;
switch (mynum) {
    case 10:
        console.log("mynum is equal to 10");
        break;
    case 20:
        console.log("mynum is equal to 20");
        break;
    default:
        console.log("mynum is not equal to 10 or 20");
        break;
}




// ** operators **
// 1. arithmetic operators
// +, -, *, /, %, ++, --
// 2. assignment operators
// =, +=, -=, *=, /=, %=
// 3. comparison operators
// ==, ===, !=, !==, >, <, >=, <=
// 4. logical operators
// &&, ||, !


// 5. ternary operators
// condition ? true : false
// 6. string operators
// +, += 
// 7. type operators
// typeof
// 8. bitwise operators
// &, |, ^, ~, <<, >>, >>> 



// arethmatic operatore

// 4/2 -> 2
// 4%2 -> 0

//assignment operator
// a=10
// a=a+5
// or a+=5
// a=a-5
// a-=5
// a=a*5
// a*=5

// comparison operators
var a = "10";// string
var b = 10; // number
// ==                //compares values // not used in js much
// ===               //compares values and datatypes // in  js we use this more
if (a==b) {
    console.log("a is equal to b");
}
else{
    console.log("a is not equal to b");
}// here we get output: a is equal to b as == only compare values not data type

var a = "10";// string
var b = 10; // number
if (a===b) {
    console.log("a is equal to b");
}
else{
    console.log("a is not equal to b");
}// here we get output: a is not equal to b as === compare values and data type

// logical operators    
// &&, ||, !

var a = 10;
var b = 20;
var c = 30;
if (a>b && a>c) {
    console.log("a is greater than b and c");
}
else if (b>a || b>c) {
    console.log("b is greater than a and c");
}
else{
    console.log("c is greater than a and b");
}


// ternary operator
var a = 10; // number
var b = 23; // number
var c = a>b ? console.log("a is greater than b") : console.log("a is less than b");
// CONDITION ? STATEMENT IF TRUE : STATEMENT IF FALSE


// increment decrement operator
var a = 10;
a++;// a=a+1
var b = 122;
b--;// b=b-1
console.log(a);
console.log(b);


// loops
// 1. for loop
// for (initialization; condition; increment/decrement) {
for (var i = 0; i <=10; i++) {
    if(i%5===0) // done to print only mltiples of 5
    console.log(i);
}

// 2. while loop

var i = 0;
while (i <= 10) {
    if (i % 2 === 0)
    console.log(i);
    i++;
}

// 3. do while loop(exit controlled loop)
var i = 0;
do {
    if (i%3===0)
    console.log(i);
    i++;
} while (i <= 10);
