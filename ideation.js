
//main menu 
const menuButton = document.getElementById('startMenuButton');
const hiddenMenuButtons = document.getElementById("hiddenMenuButtons");
//hides and presents the menu 
function showMenuButtons() {
hiddenMenuButtons.classList.toggle('visible');
}

if (menuButton) {
    menuButton.addEventListener('click', showMenuButtons);  
}



//SCAMPER user input and next button
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


const ideaBox = document.getElementById("brainstorm")
//replicating the idea boxes
const newBox = ideaBox.cloneNode(true);
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

