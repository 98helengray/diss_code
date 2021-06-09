

//navigation bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 



//Check the SCAMPER user input when click the next button
//Need to add it to local storage as well
const nextButton = document.querySelector('input');

function checkInput(){
    const userIdeas = document.querySelector('textarea').value;
if (userIdeas.trim() === '') {
        alert("Please enter an idea")
    }
};
if (nextButton){
    nextButton.addEventListener('click', checkInput)
};



//Adds the users name, and presents it on the wesbite under the first p
function addName(){
    console.log(nextButton.value)
    localStorage.setItem('Name', nextButton.value) 
}

if (document.getElementById('name')){
    includeName();
}

function includeName(){
    const userName = document.getElementById('name');
    userName.innerHTML = 'Hi ' + localStorage.getItem('Name') + '!'
}


//const ideaBox = document.getElementById("brainstorm")
//replicating the idea boxes
//const newBox = ideaBox.cloneNode(true);
var allIdeaBoxes = document.getElementsByClassName('hey');

//calling the functions that keep idea boxes and ideas in the same place on the brainstorm page
showPreviousBoxes();
includePreviousValue();
for (var item of allIdeaBoxes){
    dragBox(item);

}

//adds a new box to the brainstorm page
function addNewBox(){
    const div = document.querySelectorAll('div')
    for(let item in div){
        if (div[item].classList != 'hey userIdeas'){
            continue
        }
        else {
            div[item].classList.remove('userIdeas')
            div[item].classList.add('keepBox')
            break
        }
    }
}

//stores the ideas in local storage
function addIdeasStorage() {
   const ideaInputs = document.getElementsByClassName('keepBox');
   console.log(ideaInputs)
   i = 1;
   for (let item in ideaInputs) {
      console.log(ideaInputs[item].lastElementChild);
      localStorage.setItem('brainstormIdea' + i, ideaInputs[item].lastElementChild.value);
      localStorage.setItem('brainstormLocTop' + i, (ideaInputs[item].style.top).toString())
      localStorage.setItem('brainstormLocLeft' + i, (ideaInputs[item].style.left).toString())
      i = i + 1;
   }
}

//presents the previous boxes on the brainstorm page
function showPreviousBoxes(){
    for (let item in localStorage){
        console.log(item)
        if (item.includes('brainstormIdea') && item.includes('brainstormIdea1') === false){
      addNewBox();
        }
        else if (item === undefined){
            break
        }
        }
 }

//presents the previous ideas in the previous boxes on the brainstorm page
function includePreviousValue(){
    const ideaInputs = document.getElementsByClassName('keepBox');
    console.log(ideaInputs)
    i = 1;
    for (let item in ideaInputs) {
        if (ideaInputs[item].lastElementChild === undefined){
            break
        }
        else{
       console.log(ideaInputs[item].lastElementChild);
       ideaInputs[item].lastElementChild.value = localStorage.getItem('brainstormIdea' + i, ideaInputs[item]);
       ideaInputs[item].style.top = localStorage.getItem('brainstormLocTop' + i)
       ideaInputs[item].style.left = localStorage.getItem('brainstormLocLeft' + i)
       i = i + 1;
    }
}
}

// Next 4 functions make the brainstorm box draggable; cite W3Schools:
function dragBox(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    console.log(elmnt.firstElementChild);
      // if present, the header is where you move the DIV from:
      elmnt.firstElementChild.onmousedown = dragMouseDown;
 
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  //Scamper ideas changing, user input shown and stored on local storage
  const scamperT = document.getElementById('scamperType')
  const scamperTextBox = document.querySelector('form')

  function displayS(){
    scamperT.innerHTML = "What can be replaced/interchanged?"
    localStorage.setItem(scamperTextBox.id, (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm1")){
        document.getElementById("scamperText").value = localStorage.getItem("frm1")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm1"
}
  function displayC(){
      scamperT.innerHTML = "What could be added, merged, or blended?"
      localStorage.setItem(scamperTextBox.id, (document.getElementById("scamperText")).value)
      if (localStorage.getItem("frm2")){
        document.getElementById("scamperText").value = localStorage.getItem("frm2")
    }
    else{
        document.getElementById("scamperText").value = null
    }
      scamperTextBox.id = "frm2"
  }

  function displayA(){
    scamperT.innerHTML = "What are five other uses or purposes we can imagine for this?"
    localStorage.setItem(scamperTextBox.id, (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm3")){
        document.getElementById("scamperText").value = localStorage.getItem("frm3")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm3"
}

function displayM(){
    scamperT.innerHTML = "In what ways can it be bigger, stronger, longer lasting, or more durable?"
    localStorage.setItem(scamperTextBox.id, (document.getElementById("scamperText")).value)
    if (localStorage.getItem("fr42")){
        document.getElementById("scamperText").value = localStorage.getItem("frm4")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm4"
}

function displayP(){
    scamperT.innerHTML = "In what ways can your idea be used other than its original intended use? "
    localStorage.setItem(scamperTextBox.id, (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm5")){
        document.getElementById("scamperText").value = localStorage.getItem("frm5")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm5"
}

function displayE(){
    scamperT.innerHTML = "What parts or pieces aren’t really necessary?"
    localStorage.setItem(scamperTextBox.id, (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm6")){
        document.getElementById("scamperText").value = localStorage.getItem("frm6")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm6"
}

function displayR(){
    scamperT.innerHTML = "What can be redesigned or re-engineered?"
    localStorage.setItem(scamperTextBox.id, (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm7")){
        document.getElementById("scamperText").value = localStorage.getItem("frm7")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm7"
}


const userScamperSummary = document.getElementsByTagName("p");

function inputSummary (){
    i = 1;
    for (let item in userScamperSummary) {
        userScamperSummary[item].innerHTML = localStorage.getItem("frm" + i);
        i = i + 1;
}
}

inputSummary();
