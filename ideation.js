//temporary form submit
function displayName(){
    document.getElementById("frm1").submit();
}




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
const userIdeas = document.querySelector('textarea').value;
const nextButton = document.querySelector('input')

function checkInput(){
if (userIdeas.trim() === '') {
        alert("Please enter an idea")
    }
};
if (nextButton){
    nextButton.addEventListener('click', checkInput)
};



// Make the brainstorm box draggable; cite W3Schools:


//add new idea box

//adding a new idea box

const ideaBox = document.getElementById("brainstorm")
const newBox = ideaBox.cloneNode(true);
var allIdeaBoxes = document.getElementsByClassName('hey');


function addNewBox(){
    const div = document.querySelectorAll('div')
    for(let item in div){
        if (div[item].classList != 'hey userIdeas'){
            continue
        }
        else {
            console.log(div[item]);
            div[item].classList.remove('userIdeas')
            break
        }
    }
}

for (var item of allIdeaBoxes){
    dragBox(item);
}

//could put hey into drag box, then get it to loop through all?

function dragBox(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
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

