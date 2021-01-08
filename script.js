//problem 1
var element = document.getElementById("container");

//problem 2
var element2 = document.querySelector(".container");

//problem 3
var element3 = document.getElementsByClassName("second");

//problem 4
var element4 = document.getElementsByClassName("third")[1];

//problem 5
var element5 = document.getElementById('container').innerHTML = "<h1>HELLO!</H1>";


//problem 6
var element6 = document.getElementsByClassName("footer")[0];
footer.classList.add("main");

//problem 7
footer.classList.remove("main");

//problem 8
var newList = document.createElement("li");

//problem 9 
newList.innerText = "four";

//problem 10
var element10 = document.getElementsByTagName("ul");
element10.appendChild(newList);

//problem 12
var problem12 = document.getElementsByTagName("ol");
var newArr = Array.from(problem12.children);
for (let i of newArr){
    i.style.backgroundColor = "green";
}

//problem 13
footer.remove();







