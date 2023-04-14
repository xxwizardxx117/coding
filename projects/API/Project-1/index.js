const express = require("express");


// *unlike response we need to use body-parser to parse the request body
// *body-parser is extra entity so we need to require it 
var bodyParser = require("body-parser");// body-parser is a middleware which is used to parse the request body
// we need this to execute the post request
// in order to acess post data we need to use body-parser
// it allows express to access the post data(read body)
// and then parse it or covert it into a Json FILE so that we can and machine can understand it


//database 
const database = require("./database"); // importing database.js file   
//initializing express
const bookmgmtsys = express();
//initializing bodyParser
// *being an extra entity it needs initialization 
bookmgmtsys.use(bodyParser.urlencoded({extended:true})); // this is used to parse the request body
// URLencoded({extend:true}) is function of request present in body parser methof
// and is used to parse the data which is coming from the client
// basically it is used to make requeest accept any format of data (req in code till now was having only string format)
// *always needed to use postman or post request
bookmgmtsys.use(bodyParser.json()); // this is used to parse the request body in json format only
// we had specified the format of data in the post request also but here we are specifying it in the code

















// GET 

//route:      here is /
//discrption: get all the books
//access:     public
//method:     get 
//params:     none
bookmgmtsys.get("/",(req,res) => { // get method to get all the books
return res.json({books:database.books});// as we put databsse.js in database const
});



// POST

//route:      here is /book/new
//discrption: add new book
//access:     public
//method:     post
//params:     none
bookmgmtsys.post("/book/new",(req,res) => {                                                                  // post method to add new book
    const newBook = req.body;                                                                                // here we are getting the data from the client
                     // req.body is used to get the data from the client 
    database.books.push(newBook);                                                                            // here we are pushing the data to the database
    //books was  are array in database.js file  //push is array method to add element to the array
    return res.json({updatedBooks:database.books});                                                          // here we are sending the updated database to the client
                        // key: value 
// and we want the response to be in json format so we use json method
});
// *IN POST MAN PASTE THE URL LOCAL HOST NO + ROUTE 
// *THEN SELECT THE DATA FORMAT TO RAW THEN FILE FORMAT TO JSON 
// *PUT THE JSON DATA IN BODY PART OF THE POSTMAN 
// *CLICK ON SEND THE NEW DATA SHOWS UP ON THE HOST 
// *HERE THE HOSTS GETTS UPDATED BUT NOT THE DATABASE AS IT IS NOT LOCAL UPDATION 
// *TO UPDATE LOCAL DATABASE WE NEED TO USE A DATABASES LIKE MONGO DB           


// GET 

//route:      here /is 
//discrption: get specific books
//access:     public
//method:     GET
//params:     isbn

bookmgmtsys.get("/is/:isbn",(req,res) => { // get method to get specific book using there isbn
    const getSpecificBook = database.books.filter((book) => book.ISBN === req.params.isbn);
    if(getSpecificBook.length === 0){
        return res.json({error:`No book found for the ISBN of ${req.params.isbn}`});
    } //we use backtic  whenever we have a dynamic parameter     // here the isbn changes dynamically with the searched isbn
    return res.json({book:getSpecificBook});
});


// GET

//route:      here /c 
//discrption: get books of specific category
//access:     public
//method:     GET
//params:     category
bookmgmtsys.get("/c/:category",(req,res) => { // get method to get books based on there category
    const getSpecificBook = database.books.filter((book) => book.category.includes(req.params.category));
    if(getSpecificBook.length === 0){                                   //includes iterrates through whole category data and then chekif it is having the parameter or not  
        return res.json({error:`No book found for the category of ${req.params.category}`});
    } //we use backtic  whenever we have a dynamic parameter     // here the chategory changes dynamically with the searched category
    return res.json({book:getSpecificBook});
});


// GET 

//route:      here /l 
//discrption: get books of specific language
//access:     public
//method:     GET
//params:     language
bookmgmtsys.get("/l/:language",(req,res) => { // get method to get books based on there language
    const getSpecificBook = database.books.filter((book)=> book.language.includes(req.params.language));
    if (getSpecificBook.length === 0){
        return res.json({error:`No book found for the language of ${req.params.language}`});
    }
    return res.json({book:getSpecificBook});
});



























// GET 

//route:      here /author 
//discrption: get all authors
//access:     public
//method:     GET
//params:     NONE
bookmgmtsys.get("/author",(req,res) => { // get method to get books based on there author
    return res.json({author:database.author});
});

// POST

//route:      here is /author/new
//discrption: add new author
//access:     public
//method:     post
//params:     none
bookmgmtsys.post("/author/new",(req,res) => {                                                                  
    const newAuthor = req.body;                                                                               
    database.author.push(newAuthor);                                                                            
    return res.json({updatedAuthor:database.author});                                                          
});






// GET 

//route:      here /author 
//discrption: get all authors
//access:     public
//method:     GET
//params:     id
bookmgmtsys.get("/author/:id",(req,res) => { // get method to get books based on there author
    const getSpecificAuthor = database.author.filter((author)=> author.id === parseInt(req.params.id));
    if (getSpecificAuthor.length === 0){            // here we have to parse the id as it is a string and we have to convert it into a number
        return res.json({error:`No author found for the id of ${req.params.id}`});
    }
    return res.json({author:getSpecificAuthor});
});


// GET 

//route:      here /author/book 
//discrption: get all authors
//access:     public
//method:     GET
//params:     isbn
bookmgmtsys.get("/author/book/:isbn",(req,res) => { // get method to get books based on there author
    const getSpecificAuthor = database.author.filter((author)=> author.books.includes(req.params.isbn));
    if (getSpecificAuthor.length === 0){
        return res.json({error:`No author found for the book of ${req.params.isbn}`});
    }
    return res.json({author:getSpecificAuthor});
});
























// GET 

//route:      here /publications 
//discrption: get all publications
//access:     public
//method:     GET
//params:     NONE 
bookmgmtsys.get("/publication",(req,res) => { // get all the books based on the  publications
    return res.json({publication:database.publication});
});


// POST

//route:      here is /publication/new
//discrption: add new publication
//access:     public
//method:     post
//params:     none
bookmgmtsys.post("/publication/new",(req,res) => {                                                                
    const newPublication = req.body;                
    database.publication.push(newPublication);                                                                          
    return res.json({updatedPublication:database.publication}); 
    // return res.json(database.publication);
    // we can also write the above like this                                               
});







// GET 

//route:      here /publications 
//discrption: get specific publications
//access:     public
//method:     GET
//params:     id
bookmgmtsys.get("/publication/:id",(req,res) => { // get method to get  publications based on there id
    const getSpecificPublication = database.publication.filter((publication)=> publication.id === parseInt(req.params.id));
    if (getSpecificPublication.length === 0){            // here we have to parse the id as it is a string and we have to convert it into a number
        return res.json({error:`No author found for the id of ${req.params.id}`});
    }
    return res.json({publication:getSpecificPublication});
});



// GET 

//route:      here / publications/book
//discrption: get the publications based on the book
//access:     public
//method:     GET
//params:     isbn
bookmgmtsys.get("/publication/book/:isbn",(req,res) => { // get method to get publications based on there book using isbn
    const getSpecificPublication = database.publication.filter((publication)=> publication.books.includes(req.params.isbn));
    if (getSpecificPublication.length === 0){            // here we have to parse the id as it is a string and we have to convert it into a number
        return res.json({error:`No author found for the id of ${req.params.isbn}`});
    }
    return res.json({publication:getSpecificPublication});
});







bookmgmtsys.listen(3000,()=>{    // made an optimized port using express
    console.log("server is running@3000");
});

// * here if want to create a lot of apis then we need to do node file name again and again
// * so to avoid doing this we have node mon 
// it is live server of node js 
// all changes made get reflected direrctly in the server
// * to install nodemon we have to install it globally
// * to install it globally we have to use -g
// for every project we need to install it again and again
//  to uninstall node mon do npm uninstall nodemon
// * to install it do npm i nodemon
//  to start nodemon do npx nodemon file name 