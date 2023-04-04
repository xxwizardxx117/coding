// console is present in web browser
// console is a object which is used to print something on console            
console.log("hello world , this is my html filecode "); //this is a comment in js 
// putting semiconlon is not necessary but it is a good practice
// log is a function or method which is used to print something on console


// ** we need  to link js file with html file

// we have data types in js
// it is divided into two types


// ** 1. primitive data types
    // these cant be altered
    //they dont provide any method
    // there are 7 primitive data types
        // 1. string it provides methods (exception)(length, toUpperCase, toLowerCase, indexOf, slice, replace, substr, substring, trim, charAt, charCodeAt, concat, endsWith, includes, match, repeat, search, startsWith, split, valueOf) 
        // 2. number        
        // 3. bigInt(new in es2020) 
        // 4. boolean
        // 5. undefined
        // 6. null   
        // 7. symbol(new in es2015) 

    //1.  string ---- it is a sequence of characters it is a primitive data type
        //                  and can be written using single quotes or double quotes
        //                   escape character comes into play when we have same quotes to be used inside and outside the string
        //                   escape character (\) is used to print single quotes or double quotes or (special characters) in between the string
        //                   in string if we want to use single quotes in between some sentence then we have to use \ (escape character) before single quotes
        //                      example -  let text = "We are the so-called "Vikings" from the north.";
                                                                        //**incorrect
        //                   in string if we want to use double quotes in between some sentence then we have to use \ (escape character) before double quotes
        //                      example -  let text = "We are the so-called \"Vikings\" from the north.";
                                                                        //****correct




    //2.  number ---- it is a numeric data and is a primitive data type
        //                  there are 3 types of numbers
        //                      1. integer               (whole number 1,2,3,4,5,6,7,8,9,10)
        //      ** example interger -   let x = 100; // x will be 100
        //                      2. floating point        (number with decimal point 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.10)
        //      ** example floating point -   let x = 100.50; // x will be 100.50
        //                      3. NaN(not a number)     (1/0, 0/0, 1/0, 0/0)
        //                  NaN is a result of an incorrect or an undefined mathematical operation
        //      ** example -  let x = 100 / "Apple"; // x will be NaN (Not a Number)




    //3.  bigInt ---- it is a very big numeric data and is a primitive data type
        //                  it is a new data type in es2020 and is used to represent whole numbers larger than 2^53 - 1,
        //                  which is the largest number JavaScript can reliably represent with the Number primitive and represented by the constant Number.MAX_SAFE_INTEGER.
        // **    example bigInt -  let x = 100n; // x will be 100n 




    //4.  boolean ---- it is a logical data type it is a primitive data type
        //                  it has only two values
        //                      1. true , 1 or any other number 
        //                      2. false, only 0
        //                  it is used to represent true or false values
        // **     example boolean -  let x = true; // x will be true    let y = false; // y will be false




    //5.  undefined ---- it is a primitive data type
        //                  it does not have any value and a data type assigned to it
        //                  rather it is a value given to a variable which is not defined (both value and data type are not defined)
        // **     example boolean -  let x; // x will be undefined




    //6.  null ---- it is a special value it is a primitive data type
        //                  it does has a data type assigned to it 
        //                  but it is a value given to a variable which is not defined (not having defined value)
        // **     example boolean -  let x = null; // x will be null





    // 7. symbol ---- it is a primitive data type
        //                  it is a value given to a variable which is not defined
        // **     example boolean -  let x = null; // x will be null






// **   2. non primitive data types
    // these can be altered
    // they provide methods
    // there are 2 non primitive data types
        // 1. object
        // 2. array


    // 1. object ---- it is a non primitive data type
        //                  it is a collection of properties
        //                  it is a data type which is used to store multiple values in a single variable


// javascript evaluates the data from left to right


// ** COMMENTS IN JAVASCRIPT
    // 1. single line comment ---- it is used to write a single line comment
            // example -  // this is a single line comment
    // 2. multi line comment ---- it is used to write a multi line comment
            // example -  /* */this is a multi line comment








//**                              variables in js
// variable is a method used to enter data types into the java script file 
// but now it is outdated and we use let and const to enter data types into the java script file
// variables have its own other scopings in js 


var name ="Sujal Sharma";
var year= "2023";
console.log(name);
console.log(year);
var name ="Sujal-Sharma SRM";
var year= "2025";
console.log(name);
console.log(year);

// we use var to mane a variable in js to name a variable
// variable name should not have any space in between
// variable name should not start with a number
// variable name should not have any special character except underscore(_)
// variable name should not be a keyword




//  we can use const also instead of var in js to name a variable
// const is used to declare a variable which is not going to change its value
// here we get an error as we can not change the value of the variable once it is declared
// HENCE IS unlike var
const namep ="Sujal Sharma";
const yearp= "2023";
console.log(namep);// here we needed to change the name of the variable as we can not declare a variable twice
console.log(yearp); //as wehad already made a name variable using var
// const namep ="Sujal-Sharma SRM";
// const yearp= "2025"                   // we can not declare a const twice as it is a constant
// console.log(name);
// console.log(year);
//  hence to correct the above code we can use let instead of const or only declare it once







// hosting is a behaviour supported by javascript in which variables and function declarations are moved to the top of their scope before code execution
// this means that no matter where functions and variables are declared, 
// they are moved to the top of their scope regardless of whether their scope is global or local
//*example/         a = 5;                                      var a;  
//                  console.log(a);   ===>is hosted as==>       a = 5;  
//                  var a; // 5                                 console.log(a); // 5  
// but it is not supported by const and let and variable and function need to be declared (initialized)before execution
//**example  program to display value 
//  * incorect way of doing it                                                          *incorrect way of doing it  
// console.log(a);                                                                      var a; (declaration can be done after console.log(a) (execution) as it gets hoisted)
// var a = 5;   we cant declare the value (initialization) along the declaration        console.log(a); 
//                     hosting issue                                                    a = 5;  incorrect as we can not declare intialization after console.log(a) (execution)
// hosting causes unwanted behaviour in js hence prefered to be avoided 
// hence we use let or const instead of var to declare a variable in js



// boolean value 
const okay = true; // IT  is not string as no inverted commas are used
console.log(okay);
//true getd printed as it is a boolean value

var one = 1;
var two = 2.2; // here unlike other language data types we can use decimal values in same data type called number 
var three =3;
console.log(one);
console.log(two);
console.log(three);
// here we get 1,2,3 as output as they are numbers\





// arrays in js
// how to store number 1 to 100
// WE WILL STORE THEM ONE BY ONE IN A VARIABLE
//  to avoid this 
// we can use array to store number 1 to 100
var numarray = [1,2,3,4,5,6,7,8,9,10, "sujal"]; //  this is how we dwclare an array in js
// declaration name = [values]
// in other languages array is of same type of elements but in js we can have any type of data in it like list in python
console.log(numarray); // used to print array to the console

// now if we want to acess any element of the array we can do it by using its index number
console.log(numarray[10]); // here we get 1 as output as index starts from 0



// objects in js 
// objects are used to store multiple values in a single variable
// objects are written using curly braces
var object = { // this curly braces makes the simple v`ariable into an object
    name: "sujal",
 // key : value  // and inside curly braces using key value pairs
    age: 20,
    id : 12345,
    test: ["fail", "pass", "pass"],
    exam: {                         // we can also have objects inside objects
        maths:'pass',
        science: "pass",
        },
    "full name": "sujal sharma", // we can also have spaces in the key name but we need to use double inverted commas to write with space 
}
console.log(object); // used to print object to the console 
// in printing order may not be same as declaration order because of data type hirerachy

// how to acess any value of the object
console.log(object.name); // we can use dot notation to acess any value of the object
console.log(object.exam.maths); // we can also acess the value of the object inside the object using dot notation   
console.log(object.test[0]); // we can also acess the value of the array inside the object using index number
console.log(object["full name"]); // we can also acess the value of the object having (space in name) double inverted commas
// hence never use space in the key name of the object as it gets complicated
