// it is a frame work of node js
// libraraies are just bundel of codes
// frame work is a collection of a lot of features which help us execute code in minimal time 
// frame work also provides us extra security and optimization 

// *why to use express?
// as any frame work simplifies the same is for express
// less code(provides lot of features of node js in form of functions)
// optimizes for production (helps in database connections user authentication)
// has one of the advanced routing machanism 
// security out of the box 
// provides some of the templateing engines(they help developer to make dynamic content on webpages )
// (html doesnt have dynamic features as it shows what we write hence is fixed but here we can do it dynamically )
// help to scale 





// * we make a folder and then we install express using npm
//  we use npm i express   to install express
// we chek dependencies in package.json
// if it has exppres then it is installed



const express = require('express');
// used to bring the express module


//  intializing the express
const app = express();
// here we make const app and we assign it to express(create an instance of express in app)
// express has a lot of formats and we can use them by calling them using app
// but we use JSON format as it is easy to use and understand (READABLE BY HUMANS AND COMPUTRES)
app.use(express.json());
//here using app using use method we use json format




// here we use CERTAIN METHODS TO DO CERTAIN TASKS by express 
// HTTPS METHODS VIA EXPRESS 

// GET --> means to retrieve data from server  // to get data from server we use get method
// POST --> means to add data to server        // to add data we use post method
// PUT   --> means to update data on server    // to update data we use put method
// DELETE --> means to delete data from server // to delete data we use delete method


app.get('/', (req, res) => {// request is to get from porrt 
                            // response is to send to port
    // there are different methods to send response to the client
    
// 1. res.send() --> it sends the data to the client in array string buffer , object format
    // res.send('hello world');   
    // send function automatically detects data format and sets the content type header for it
    // it can be programmable changed using res.set(contenttype, text/html) function 
    return res.json({data:'hello world'});
// 2. res.json() --> it sends the data to the client in json format
    // here we use json format to send data to via express a function of express
    // it works same as the send method but it is more readable and understandable
    // it is used to send data in json format and has functionality of converting non json data into json format and allows formating also in json 
    // for formatingjson these two are passesd to stringfy function as parameters JSON.[stringfy(object , replacer , space )]
    // formating like spaces and replacers 
    // jsonspacing is method that allows to make the output come in a nice clean formatted way or in compact json with no spacing 
    // json replacer is a setting which goes to json.stringfy()for allowing us to manipulate and fiter the json
    //while send just converts object data to json format
});

// 3 res.end()---> it is a method to terminate the  session this could be done by using res.end() 
    // it  is not  a necessary method to use as it is used to terminate the session and it is done automatically by express
    // we use  it if we to end the response without sending any data to the client 
    // can used for 404 padges or error pages eg res.status(404).end();

// 4. res.status() --> it is used to set the status code of the response

// 5. res.redirect() --> it is used to redirect the client to another url

// 6. res.download() --> it is used to download a file from the server to the client

// 7. res.sendFile() --> it is used to send a file from the server to the client



// * here we are making a new route and we are using get method to get data from server
app.get('/b', (req, res) => {
    return res.json({data:'this is route b'});
});



// *here we made the next route  but if  we have a lot of routes then we cant useq this method 
// as it is not scalable(we cant write so many time same code again and again) and it is not a good practice to use it 
// so we use express router to make routes

app.get('/b/:id', (req, res) => { // here we need to specify the route here we use :id to specify the route 
    // : in route is specifing that this id is dynamic and it can be anything
    const students = [  // ARRAY OF OBJECTS as we need data  to display on webpage without multiple time writing code    
        {
            id: 1,
            name: 'student1',
        },
        {   
            id: 2,
            name: 'student2',
        },
        {   
            id: 3,
            name: 'student3',
        },
        {   
            id: 4,
            name: 'student4',
        },
        {   
            id: 5,
            name: 'student5',
        },
    ]

    // now here we wanted that the data to be shown if we enter the id of student in the url
    // now logic to do this is that we need to fetch student id once from the data and  other from the url 
    // and then we need to compare them and if they are same then we need to display the data of that student
    // we use find method to find the student id from the data
    const studentId =req.params.id; // it goes throughs the parameters and chek if the parameter is present or not 


    const getstudent = students.filter((student) => student.id === parseInt(studentId));
    // here if we use === we need to match data type and value 
    // parseInt is used to convert string to integer // typecasting

    return res.json({data: getstudent});// prints the data on route

    // other way to do this is
    // const student = students.find((student) => student.id === parseInt(req.params.id));

}); 









app . listen ( 3000 , () => {
    console . log ( 'server is running on port 3000' );
    // here the above msg will be displayed when we run the code 
});
// here we use app and listen method to listen to port 3000