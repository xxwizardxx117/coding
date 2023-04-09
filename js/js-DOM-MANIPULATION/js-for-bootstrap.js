// <!-- here we will start with the partial back  as we will be learning about dom  -->
console.log("this is the checking if js works or not");
// we are using js file to use dom (document object model) to manipulate the html file
// before we used to type and correct the html file 
//  now we use dom to change the html code without changing the html file via visiting
// for example we can change the text of the heading by using dom







// * selection of target  input data on to console 
const TASKCONTAINER = document.querySelector(".task_container")
// QUERRY SELECTOR is used to select the class or id of the html file
// IN THIS WE SELECT THE TARGET IN CSS FORMAT
console.log(TASKCONTAINER);
// used to bring the class itself to be printed onto console but is not need here in project just done for self convinence






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







//  * function that makes new card each time data is entered

// here we use the (``) symbol to enter the code that we need to make our new card with new data  
// here we add the id of the different input data using (${function_name . id of }) symbol 
const newcard = `
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





TASKCONTAINER.insertAdjacentHTML('beforeend',newcard);// insertAdjacentHTML is used to insert the new card in the html file 
// IT EXTRACTS THE RECENT CHILD AND ADDS IT IN THE WAY WE WANT IT TO BE
// above we said adjecent html to the task container and specified newcard to it 
// HERE WE WANT TO ADD CARD RIGHT AFTER THE CURRENT CARD SO WE DO BEFORE END AND TO THE ADJECENT 
// (as a result the card comes on right adjecent to the previous card)
};






// what is the parent of any dom 
// answer it is documment so whenever we nee to acess something using the id class we need to document.