const items = { 
    food:1000,
    driks:2000,
};
var cart = 0 ;
function addtocart(/*whatever put here is a parameter*/){
    cart += items.food;
}
addtocart(/*whatever put here is a argument*/);
addtocart()//  function call
console.log("cart:",cart); // 2000 is printed






// correct way to write a function
function addtocart2(parameter){
    // cart += items.parameter; wrong as parameter is a variable not a pre defined element 
    // we get NaN as the variable parameter is defined but has no value and an incorrect operaton is being done
    cart += items[parameter];// here parameter is a new variable having value = whatever is passed in argument
}
addtocart2("food");
addtocart2("driks");
console.log("cart:",cart); // 5000 is printed






// function which will return some value
var cart2 = 0;// made new cart to avoid confusion
function addtocart3(item){//3 function calls operation ,adds and returns
    return cart2+item;
}
function cartvalue(item){//2 value gets assigned to item
    cart2= addtocart3(item); //4 value gets assigned to cart2
}
cartvalue(items.food);//1 here we take value
cartvalue(items.driks); // 5 second time we take value and repeat steps 1-4
console.log("cart2:",cart2); // 3000 is printed










console.log("here we will output the above code using arrow function");
// arrow function (introduced in es6 )
// arrow function is a function which is written in a single line
// it is a shorter form of function of an entire function 
// example 
// const add = (a,b) => a+b;
// console.log(add(2,3));
// here we have a function add which takes two parameters a and b and returns the sum of a and b

// we will convert above functioninto arrow function

cart2=0;
var addtocart = (item) => {cart2+item};
// variable= //parameter => // function body
var cartvalue = (item) => {cart2= addtocart3(item)};
cartvalue(items.food);
cartvalue(items.driks);
console.log("cart2:",cart2); // 3000 is printed


// there are few limitations of arrow function

//**    1.  arrow function is not hoisted


// in case of normal function
function addp(){
    console.log("hello world 1");
}
addp();
// here our function is hoisted and we can call it before it is defined
addp();
function addp(){
    console.log("hello world 2");// here we cans see that 2 gets printed both time 
}// it happens because the variable is hoisted as a resulte we declared addp to 1 and then to 2 so 2 is printed both time




// in case of arrow function
var addp2 = () => {console.log("hello world 1")};
addp2();
// here we see that program runs fine as variable is declared firt and then call is made 

// addp3();// if uncommented this thing fails as the variable is not hoisted
var addp3 = () => {console.log("hello world 1")};
// here we get error as the variable is not hoisted






//**   2.  arrow function does not have "this"  keyword

// what is this keyword??
// it refers to the currently executing object
// example
console.log(this);// here this refers to the window of the browser as the code is being executed in the browser
// when we use in command line we see that it will show our pc name







// in case of normal function
function normalthis(){
    console.log(this);
}
normalthis();// here this refers to the window of the browser as the code is being executed in the browser

// but when  we have an object 
const object = { // main declaration
    name:"this object",
    printthis: function(){//  function inside object
        console.log(this);
    }
};
// function call 
object.printthis();// here when the code runs we get the whole parent function ({name:"this object",printthis: function()}) as the output







// in case of arrow function
const arrowthis= ()=> {
    console.log(this);
};
arrowthis();// here this refers to the window of the browser as the code is being executed in the browser


// when we have object 
const object2 = { // main declaration
    name:"this object",
    printthis: () =>  {//  function inside object
        console.log(this);
    }
};
// function call
object2.printthis();// here when the code runs we get the window of the browser as the output   
// hence we see that this keyword doesnt work for arrow functions





// 
//    ****************** arrays functions*****************
// 
// 


// * how to add something to the array 

var array =[1,2,3,4,5,6,7,8,9,10];
console.log (array);
array.push(11);// push is a function which adds element to the end of the array
console.log (array);// we see 11 at the end of the array

// push is an inbuilt function of array

// * how to remove something from the array 
array.pop(array);// pop is a function which removes element from the end of the array
console.log(array);// we see 11 is removed from the array

// pop is an inbuilt function of array

// * how to add something to the beginning of the array
array.unshift(0);// unshift is a function which adds element to the beginning of the array
console.log(array);// we see 0 at the beginning of the array

// unshift is an inbuilt function of array

// * how to remove something from the beginning of the array
array.shift();// shift is a function which removes element from the beginning of the array
console.log(array);// we see 0 is removed from the array

// shift is an inbuilt function of array



// 
// ****************recursive functions *****************
// fuction which call themselves are called recursive functions
// reccursions are used to break down very bi problems into smaller problems
// we see this in graphs trees and dynamic programming
//
// 

var num =1;
function printnum(){
    console.log(num);
    num ++;

    if(num<=10){
        printnum();
    }
    else{
        console.log("done")
        return; // means come back to previous recursion or return nothing
    }
}

printnum();