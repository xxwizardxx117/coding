// here we will start with the partial back  as we will be learning about dom  
console.log("this is the checking if js works or not");
// we are using js file to use dom (document object model) to manipulate the html file
// before we used to type and correct the html file 
//  now we use dom to change the html code without changing the html file via visiting
// for example we can change the text of the heading by using dom




// * selection of target  to where to input data on to console or html
const TASKCONTAINER = document.querySelector(".task_container")
// QUERRY SELECTOR is used to select the class or id of the html file
// IN THIS WE SELECT THE TARGET IN CSS FORMAT


console.log(TASKCONTAINER);
// used to bring the class itself to be printed onto console but is not need here in project just done for self convinence

// * function that takes data from user  (not necessary that it prints it on console)
//here we make an array of the data of the user
const globalstore = []; // array we made of objeccts




// * function used to make new card
const generatenewcard=(taskdata)=>
    `
    <div class="col-sm-12 col-md-6 col-lg-4 id=${taskdata.id}">
    <div class="card shadow ">
        <div class="card-header d-flex justify-content-end gap-2" > 
            <button type="button" class="btn btn-outline-success"><i class="fa fa-duotone fa-pencil" style="--fa-primary-color: #ff0000; --fa-secondary-color: #000000; --fa-secondary-opacity: 0.5;"></i></button>
            <button type="button" class="btn btn-outline-danger"><i class="fa fa-duotone fa-trash" style="--fa-primary-color: #04ff00; --fa-primary-opacity: 0.5; --fa-secondary-color: #005eff; --fa-secondary-opacity: 1;"></i></button>
        </div>
        <div class="card-body">
            <img class = "card-img-top" src=${taskdata.IMAGEURL} class="card-img-top" alt="drinking coffe in room image">
            <h5 class="card-title mt-3 fw-bold text-primary">${taskdata.TASKTITLE}</h5>
            <p class="card-text">${taskdata.TASKDESCRIPTION}</p>
            <a href="#" class="btn btn-primary">${taskdata.TASKTYPE}</a>
        </div>
    </div>
    </div>
    `;
// here we use the (``) symbol to enter the code that we need to make our new card with new data  
// here we add the id of the different input data using (${function_name . id of }) symbol 








// *function that loads the initial card data from local storage
const loadinitialcarddata = () => {
    //1.  local storage to get tasky card data
const getcarddata = localStorage.getItem("tasky");
    // hwew we acess the local storage and then use getitem method to get the data of the tasky
    //2.  convert to normal object
const {cards} = JSON.parse(getcarddata);
    // here we use json.parse to convert the data into a object (parse is opposite of stringfy)
    // 3. loop over those array of task object to create HTML card and inject it to DOM
cards.map((cardObject) => {
        TASKCONTAINER.insertAdjacentHTML('beforeend',generatenewcard(cardObject));
        // 4. update our globalstore array (we do  it inside our map function itself)
        globalstore.push(cardObject);
        }
    )
    
};   







// *function that takes data from user  (not necessary that it prints it on console) 
// after we bring the class to console we need to use it to get the data from the user

// here savechanges is a function made to connect save changes button with the stored data of the user(as soon as savebutton is clicked the object taskdata starts and logs all data of the user)
const savechanges = () => {
    // here object taskdata is made to store the data of the user
    const taskdata = {  // object we made 
        id:'${Date.now()}',// it provide unique id each time // $ {} is used dynamically render some value  (means that every secnd the value gets changed because of this inbuilt function )
        // this is the template string // we use id to give every new card made seperate id // ' is used so as to avoid the error of the id having different
        IMAGEURL:document.getElementById('imageurl').value,// code without dot value add all data to the console but doesnt show the value of the id in comnsole 
        // key : VALUE 
        TASKTITLE:document.getElementById('tasktitle').value,// here key name and the id name cant be same so we changed the key name
        TASKTYPE:document.getElementById('tasktype').value,
        TASKDESCRIPTION:document.getElementById('taskdiscription').value,// getElementsByid is used to get the value of the id 
    };
    // *below we used the command to chek how data is stored in the object in console 
    console.log(taskdata);




// after we save data in above  the below code is used to make new card each time data is entered



//  * function that generates new card
// * here below we use the command to print the new card on html but we have to to generatenew card function as that is having the code to make new card
TASKCONTAINER.insertAdjacentHTML('beforeend',generatenewcard(taskdata));
// insertAdjacentHTML is used to insert the new card in the html file 
// IT EXTRACTS THE RECENT CHILD AND ADDS IT IN THE WAY WE WANT IT TO BE
// above we said adjecent html to the task container and specified newcard to it 
// HERE WE WANT TO ADD CARD RIGHT AFTER THE CURRENT CARD SO WE DO BEFORE END AND TO THE ADJECENT 
// (as a result the card comes on right adjecent to the previous card)




// after the data is stored in the object and the new card is made we need to store the data of the user in the local storage so that it can be used later on and doesnt go away on refreshing the page



// here we use push method of array to input data from task data
// here we cant push the data directly as it is an object so we need to convert it into a string  use of jason is here
// local storage doesnt take data in the form of object so we need to convert it into a string
globalstore.push(taskdata);
localStorage.setItem("tasky",JSON.stringify({cards:globalstore})); // here we use local storage to store the data of the user
// storage call + method ( id , json.stringify(data))
// here we use local storage to store the data of the user with a new id tasky
// it means in local storage using its method setitem we add an item into the local storage
// normally the data stored is in obhect form but local storage doesnt take data in the form of object so we need to convert it into a string
// we use jason.stringify to convert the data into a string
// but stringy takes key value pair so we need to make a key value pair as a result we use {card:globalstore}
// local storage is a browser storage so it gets shared by  all the projct to avoid this we use the id to store it 



// * after the data is stored in the local storage we need a function to load the data from the local storage to the browser on each refresh
};





// what is the parent of any dom 
// answer it is documment so whenever we nee to acess something using the id class we need to document.




// WE WANT OUR DATA TO NOT GET DELETED WHEN PAGE REFRESHES 


// we dont have a data base 
// so we cant store data  
//      SO WE HAVE TO MAKE LOCAL STORAGE  
//     LOCAL STORAGE - it acts as a meadiator which allows  application acess via storage 
//     IT ALLOWS  pages TO locally store named key/value pairs inside a client’s Web browser.  
//     anything stored inside local storage is never lost even on refresh as it is stored in browser 
//     it can be acessed using JS code as we make a local storage object there  
//     API (application programming interface) - this is a api  LIKE (small part of API) process(local storage acts like an api)  
//     INTERFACE - means to be a middle man (so here local storage acts as an interface) 
    
// WE WANT ADD FEATURES LIKE EDIT DELETE OPEN THE CARD  





// API - API is a interface which allows communcation b/w two different components like weather bureau's system which has data and mobile device through we are trying to acess that data  
// API architecture is usually explained in terms of client and server. 
// sender is sender and receiver is client 
// api can work in 4 ways based on there time of creation 
// 1 SOAP APIS 
// 2 REST APIS 
//   RPC APIS    
// 3 Websocket APIS 
// 3 GRAPHQL APIS 
// 4 GRPC APIS 