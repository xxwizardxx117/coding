// destructuring
// destructuring is a way to extract data from array or object
const array = [1, 2, 3, 4, 5];
array [0]; // this is how we acess a element in the array\


function getarray(){
    return [1,2,3,4,5];
}
// here when we dont know that we have a dynamic array and dont know how many elements are there in the array
//we assign the array to a variable and then we can access the elements of the array
//this is called destructuring
const [a,b,c,d,e,f] = getarray();
console.log(a);//1
console.log(b);//2
console.log(c);//3
console.log(d);//4
console.log(e);//5
console.log(f);//undefined

// in react we will learn why we do this 




// Maps
var maparray2 = [1,2,3]
const mapnew_array = maparray2.map((e)=>(e+1));
// variable       // parameter  // body
console.log(maparray2); // this will print the original array
console.log (mapnew_array); // this will print the new array with the elements incremented by 1    






// filter
// here it is used to filter the elements of the array
// filtration is done based on certain condition and we will 
// will return the elements which satisfies the condition in a new array
var array3 = [1,2,3,4,5,6,7,8,9,10];
const newarray3 = array3.filter((e)=>(e%2==0));
// variable       // parameter  // body -condition  
console.log(array3); // this will print the original array (array3
console.log(newarray3); // this will print the elements which are even




// now we  begin with es 6 
function hello (name){
    if (name )
    console.log("hello "+name);// prints hello name when  name is passed
    else
    console.log("hello world");// prints hello world when condition fails 
}
hello("SUJAL");


// IN ES6 WE HAVE DEFAULT PARAMETERS
function hello2 (name = "world")// here we passed the default condition in the parameter itself
{
    console.log("hello "+name);
}
hello2();// prints hello world
hello2("sujal");// prints hello sujal


//NEXT FEATURE IN ES6
// if we want to console log in different lines 
// we did 
console.log ("apple\nbanana\ngrapes\nmango");
console.log("----------------------");
// in es6 we have TEMPLATE LITERALS
console.log(`
apple
banana
grapes
mango
`);// it is like pre in html whatever we do inside `` it will be printed as it is



// SCOPING IN ES6
// scoping means deciding the visibility of the variables
// for loop if ekse statement in a function then the functuin is the scope of variable if we declare it globally it is having a global scope 
// in es6 we have let and const
// here in scoping let comes into action

// scoping without let
function  outsidefunc(){
    var name1="xyz";
    let name2="abc";

    function inside(){
        var name1 ="xyzxyxx";
        console.log(name1);// prints xyzxyxx
    }
    inside();
    // after changing the value of name 1 inside the function 
    // we use the function name 1 again
    console.log(name1);// prints xyz    
    // it prints the default answer as the scope are different
    // inner scope has value  updation while outer is not affected
}
outsidefunc();



console.log("Here we are making different function so we can use name1 and name2 again with them affecting each other as both are declared in different scopes of different functions");



// but if we do the same with let keyword
function  outsidefunc2(){
    var name1="xyz";
    let name2="abc";

    function inside(){
        let name2 ="x2232324";
        console.log(name2);// prints x2232324
    }
    inside();
    // after changing the value of name2 inside the function 
    // we use the function name2 again but it is in outer scope
    console.log (name2);// prints abc    
    // it prints the default answer as the scope are different
    // inner scope has value  updation while outer is not affected
    
}
outsidefunc2();

// * code below  with the difference as there are errors
// ** we see the same thing as var nothing changes in let 
// only difference is var supports hosting
function  outsidefunc(){
    name1="xyz";// we didnt declare it 
    name2="abc";// we remove declaration for let 

    function inside(){
        var name1 ="xyzxyxx";
        console.log(name1);// prints xyzxyxx
    }
    inside();
    console.log(name1);// prints xyz    
    var name1;// here we declare at the end this is hosting
    // let name2; // we get error 
}
outsidefunc();




// * ASYNCHRONOUS JS
// synchronous means happening at same time (real timehappening things)
// asynchronous means that thing get done right now but we get the results at a later future
// asynchronous js is having promises
// * PROMISES
// it means that the code tries to get asynchronous data server promises that in future it will fetch it as it is not sure it can do it right now or not  
// as it will deal with the synchronous data first
//
fetch("https://jsonplaceholder.typicode.com/users")
// then means after doing this do this 
.then((result) =>result.json())// json is conversion of data into object and key value pairs
// here we are fetching the data from the server and then we are converting it into json format
.then((data)=> console.log(data));
// here we are fetching the data from the server and then we are printing the result and then we are printing the data
// we can also do it in a single line 
// is case data is not fetched the browser throws error and the promise is not fullfilled or it is abandoned 
// * ASYNC AWAIT
//async await is a way to write asynchronous code in a synchronous way
// it is syntactically improvised way to do the above thing



console.log  ( "---------------" );
// to do it in normal way 

// async function getdata(){ 
                // this syntax can be used
//     const result = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await result.json();
//     console.log(data);
// }

//  in ES6 we can do it in this way 
    const getdata = async () => {  // here this the syntax
    const result3 = await fetch("https://jsonplaceholder.typicode.com/users"); // here we store all the data in the variable result  and we will wait for the fetch 
    const data2 = await result3.json(); // here we store the data in the variable data and we will wait for the result to be converted into json
    console.log(data2);// after conversion we just publish the data onto the console
};

getdata();