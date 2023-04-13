const { Console } = require('console');
const fileSystem = require('fs');
//  require is keyword to import module (external as well as internal) in js file 
//  fs is module name (official name of module is file system)

// *code to make a file 

// write File() is inbuit function of fs module to write in file or create a new file if not exist
     // inbuilt func.  ( file name, data, callback func. )) 
     fileSystem.writeFile('trialfile.txt', 'Hello World', function(err,result){
        if (err){ // here if any err then display err(checks if entire call back is having an error or not)
            console.log(err);// we can also write console.log(err.message) to display only the message or console.log(err.statuscode) to display the status code
        }// result is the output of the function
    });



// *code to remove the file 
// we use unlink() function of fs module to remove the file
fileSystem.unlink('trialfile.txt', function(err,result){// here  we have to remove the text (string) from the function parameter
    if (err){ 
        console.log(err);
    }
});




        






// *code to create a folder
// we use mkdir() function of fs module to create a folder
fileSystem.mkdir('trial folder', function(err,result){// here  we have to remove the extension from file name as folder is not a file
    if (err){ 
        console.log(err);
    }
});



// *code to remove a directory
// we use rmdir() function of fs module to remoce a folder 
fileSystem.rmdir('trial folder', function(err,result){// here  we have to remove the extension from file name as folder is not a file
    if (err){ 
        console.log(err);
    }
});



