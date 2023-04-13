
// creating a port
const http = require('http');// this is internal command of nodejs
http.createServer(function(req,res) {
// http.creteorserver((request,response) => {});// arrow function for same
        // has own method createserver  //has two parameters request(to server) and response(from server)
    console.log(req.headers);// to display headers
    res.end("Hello World") ;
    // to display message on browser when the code ends 
}
).listen(3000);// to listen to port 3000
//listen is a function of createserver module
// here we specified the port number
// to view the outcome we need to open the browser and type localhost:3000
// after that we can see the message on the browser and the message on the cmd line
// text that appears on cmd line is not readable by us is the headers
// to terminate the server we need to press ctrl+c in cmd line 






// * there is a problem here that is that for all ports after 3000 we get same text printed 
//  this should not happen as next port should have different text or give error



http.createServer(function(req2,res2) {
        // console.log(req2.headers); we dont need header to be displayed so commented
        // but we want that diffeent ports should have different text or should display errors
        // so we use if else statement
        if (req2.url === "/") {
            //  "/" is the home page (root route)
            res2.end("This is port 4000") ;
        }
        else {
            res2.end("Error 404, This is not root page");
        }
    }).listen( 4000);



    // after doing this we can see that for port 3000 we get "Hello World" and for port 4000 we get "This is port 4000"
    // and for any other port we get "Error 404, This is not root page" when in case of port 4000 we specified the root page as "/" and defined else for other pages
    // if we just leave it at if it will still display 


    // * but as the site becomes big it becomes difficult to manage all the pages and routes
    // as we cant write if else statements for all the pages
    // so we use express module to manage all the routes and pages