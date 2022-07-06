var saveBtnEl = document.querySelector("#saveBtn");
var userTask = document.querySelector("#timeBlock");
var taskCounter = 0;
var timeOfDay = 9;
var tasks = [];

localStorageObject = {
    name: "",
    id: ""
}



setInterval(function(){
    $("#currentDay").text(moment().format("MMM Do, YYYY [at] hh:mm:ss A"));
    
}),
1000;


var createElements = function(){
//creating p element

userTask.addEventListener("dblclick", function(event){
    var elementInfo = event.target;
    localStorageObject.name = elementInfo.value;;
    localStorageObject.id = taskCounter
    tasks.push(localStorageObject);
    console.log(localStorageObject);
    
    

    

});

for (var i = 0; i < 9; i++){
    var taskpEl = document.createElement("p");
    taskpEl.className = "hour col-1";
    taskpEl.textContent = timeOfDay;

    //create textarea

    var textAreaEl = document.createElement("textarea");
    textAreaEl.className = "col-10";
     textAreaEl.setAttribute("data-task-id", taskCounter);

     // create button element

     var buttonEl = document.createElement("button");
     buttonEl.className = "saveBtn col-1";

    userTask.appendChild(taskpEl);
    userTask.appendChild(textAreaEl);
    userTask.appendChild(buttonEl);

   
    
    
    taskCounter++;
    timeOfDay++;
    
    

    if (timeOfDay > 12){
        timeOfDay = 0;
        timeOfDay++;
    }
        if (moment() > timeOfDay){
            textAreaEl.classList.remove();
            textAreaEl.classList = "col-10 past";
        }
        
        if (moment() === timeOfDay){
            textAreaEl.classList.remove();
            textAreaEl.classList = "col-10 present";
        } 
        if (moment() < timeOfDay){
            textAreaEl.classList.remove();
            textAreaEl.classList = "col-10 future";
        }
    

  

   
    
 }

}



createElements();
