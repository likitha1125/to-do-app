// JS code for ToDo app
var listOfActivities = [];
// create an array named list to store our to-do activites
var input = document.getElementById("input");
// create a DOM variable named input to get the to-do activity added from HTML form
var todolist = document.getElementById("todolist");
// create a DOM variable todolist ul tag (unordered list)
document.getElementById("button").onclick = click;
//  using onclick to run the click function when button is clicked
// adding a todo activity
function click(){
    listOfActivities.push(input.value);
    console.log(listOfActivities);
    input.value="";
    showlist();
}
function showlist(){
    todolist.innerHTML = "";
    listOfActivities.forEach(function (n, i) {
    todolist.innerHTML  +=
    "<li>" +
    n +
    "<a onclick='editItem(" +
    i +
    ")'>Edit</a>" + 
    "<a onclick='deleteItem("+
    i +
    ")'>&times | </a></li>";


    } );
}
function deleteItem(i){
    listOfActivities.splice(i,1);
    showlist();
}
function editItem(i){
    var newValue = promt("Please insert your new value");
    listOfActivities.splice(i, 1, newValue);
    showlist();
}