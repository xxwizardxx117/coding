const express = require("express");
//database 
const database = require("./database"); // importing database.js file   
//initializing express
const bookmgmtsys = express();

//route:      here is /
//discrption: get all the books
//access:     public
//method:     get
//params:     none
bookmgmtsys.get("/",(req,res) => { // get method to get all the books
return res.json({books:database.books});// as we put databsse.js in database const
});

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



//route:      here /author 
//discrption: get all authors
//access:     public
//method:     GET
//params:     NONE
bookmgmtsys.get("/author",(req,res) => { // get method to get books based on there author
    return res.json({author:database.author});
});


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




//route:      here /publications 
//discrption: get all publications
//access:     public
//method:     GET
//params:     NONE 
bookmgmtsys.get("/publication",(req,res) => { // get all the books based on the  publications
    return res.json({publication:database.publication});
});



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
    console.log("server is running");
});

// * here if want to create a lot of apis then we need to do node file name again and again
// * so to avoid doing this we have node mon 
// it is live server of node js 
// all changes made get reflected direrctly in the server
// * to install nodemon we have to install it globally
// * to install it globally we have to use -g
// for every project we need to install it again and again
