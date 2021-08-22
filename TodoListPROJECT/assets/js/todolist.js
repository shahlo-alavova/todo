var list = ["Have a Breakfast"];

var toDo = prompt("What would you like to do?");

while(toDo !== "quit"){
	if(toDo === "list"){
	listToDo();}
	if(toDo === "new"){
		addToDo();
	}
	if(toDo === "delete"){
		deleteToDo();}
	
    toDo = prompt("What would you like to do?");}

quitApp();


function addToDo(){
	var newToDo = prompt("Enter a new todo");
		list.push(newToDo);
		console.log(newToDo + " Added To the List");
}
function listToDo(){
	console.log("^^^^^^");
	list.forEach(function(show, index){
		console.log(index + ": " + show)});
	console.log("^^^^^^");
	}
function deleteToDo(){
var oldToDo = prompt("Enter an index of a todo");
		list.splice(oldToDo, 1);
		console.log("Deleted");
}
function quitApp(){
	console.log("Bye-bye, Love!");
}
