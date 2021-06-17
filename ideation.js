

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
   for (item of ideaInputs) {
      localStorage.setItem('brainstormIdea' + i, (item.children)[1].value);
      localStorage.setItem('brainstormLocTop' + i, (item.style.top).toString())
      localStorage.setItem('brainstormLocLeft' + i, (item.style.left).toString())
      i = i + 1;
   }
}


//presents the previous boxes on the brainstorm page
function showPreviousBoxes(){
    for (let item in localStorage){
        if (item.includes('brainstormIdea') && item.includes('frm') === false  && item.includes('brainstormIdea1') === false){
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
    i = 1;
    for (item of ideaInputs) {
        if (item.children[1] === undefined){
            break
        }
        else{
       item.children[1].value = localStorage.getItem('brainstormIdea' + i);
       item.style.top = localStorage.getItem('brainstormLocTop' + i)
       item.style.left = localStorage.getItem('brainstormLocLeft' + i)
       i = i + 1;
    }
}
}


// Next 4 functions make the brainstorm box draggable; cite W3Schools:
function dragBox(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
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

  //need to make it so when they click on an option, will change this idea (done)
  //and will bring new textareas in the scamper page (could do this through parameter entry under option tags)

  //Scamper ideas changing, user input shown and stored on local storage
  const scamperT = document.getElementById('scamperType')
  const scamperTextBox = document.querySelector('form')
  const scamperLetter = document.getElementById('scamperAcronym')

  

  function displayS(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Subsitute"
    scamperQuestion.innerHTML = "Can I substitute one part for another or change any parts?",
    //stores previous idea under letter (frm1...) and chosen idea
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    console.log(ideaInPlay[1])
    //displays idea if there was one previously submitted
    if (localStorage.getItem("frm1")){
        document.getElementById("scamperText").value = localStorage.getItem("frm1")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    //changes textbox id to the new one
    scamperTextBox.id = "frm1"
}
  function displayC(){
    const ideaInPlay = document.getElementById("chosenID").classList
      scamperLetter.innerHTML = "Combine"
      scamperQuestion.innerHTML = "What ideas, materials, features, processes, people, products, or components can I combine?",
      localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
      if (localStorage.getItem("frm2")){
        document.getElementById("scamperText").value = localStorage.getItem("frm2")
    }
    else{
        document.getElementById("scamperText").value = null
    }
      scamperTextBox.id = "frm2"
  }

  function displayA(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Adapt"
    scamperQuestion.innerHTML = "Which part of the product could I change?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm3")){
        document.getElementById("scamperText").value = localStorage.getItem("frm3")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm3"
}

function displayM(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Modify"
    scamperQuestion.innerHTML = "What can I magnify or make larger?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm4")){
        document.getElementById("scamperText").value = localStorage.getItem("frm4")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm4"
}

function displayP(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Put to other uses"
    scamperQuestion.innerHTML = "What else can it be used for?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm5")){
        document.getElementById("scamperText").value = localStorage.getItem("frm5")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm5"
}

function displayE(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Elaborate"
    scamperQuestion.innerHTML = "What can I remove without altering its function?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm6")){
        document.getElementById("scamperText").value = localStorage.getItem("frm6")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm6"
}

function displayR(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Redesign"
    scamperQuestion.innerHTML = "What can I rearrange in some way can I interchange components, the pattern, or the layout?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
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

function initialDisplay(){
    if (localStorage.getItem("frm1")){
        document.getElementById("scamperText").value = localStorage.getItem("frm1")
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm1"
}

//when first clicking on SCAMPER page, will display subsitute text area either null or previous idea
if (document.getElementById('scamperAcronym')){
    initialDisplay();
}
//summary of the SCAMPER ideas on scamper summary page
if (document.getElementById("scamperSummary")){
    inputSummary();
}

const chosenIdea = document.getElementById("chosenIdea");

//all of the different prompts per scamper letter
var subPrompts = ["Can I substitute one part for another or change any parts?",
    "How can I substitute the place, time, materials or people?",
    "Can I replace someone involved?",
    "Can I change the rules?",
    "Should I change the name?",
    "Can I use other ingredients or materials?",
    "Can I use other processes or procedures?",
    "Can I use this idea for other projects?",
    "Can I change my feelings or attitude towards it"]

var comPrompts = [
    "What ideas, materials, features, processes, people, products, or components can I combine?",
    "Can I combine or merge this or that with other objects?",
    "What can I combine so as to maximize the number of uses?",
    "What can I combine in order to lower the costs of production?",
    "Which materials could I combine?",
    "Where can I build synergy?",
    "Which are the best elements I can bring together so as to achieve a particular result?"]

var adaPrompts = [
    "Which part of the product could I change?",
    "Could I change the characteristics of a component?",
    "Can I seek inspiration in other products or processes, but in a different context?",
    "Does the history offer any solutions?",
    "Which ideas could I adapt, copy, or borrow from other people’s products?",
    "What processes should I adapt?",
    "Can I adapt the context or target group?",
    "What can I adapt in this or that way in order to make this result?"
]

var modPrompts = [
    "What can I magnify or make larger?",
    "What can I tone down or delete?",
    "Could I exaggerate or overstate buttons, colours, size…?",
    "Could I grow the target group?",
    "What can be made higher, bigger, or stronger?",
    "Can I increase its speed or frequency?",
    "Can I add extra features?",
    "How can I add extra value?",
    "What can I change in this way or that way so as to achieve such and such a result?"
]

var putPrompts = [
    "What else can it be used for?",
    "How would a child use it?—an older person?",
    "How would people with different disabilities use it?",
    "Which other target group could benefit from this product?",
    "What other kind of user would need or want my product?",
    "Who or what else may be able to use it?"]

var eliPrompts = [
    "What can I remove without altering its function?",
    "Can I reduce time or components?",
    "What would happen if I removed a component or part of it?",
    "Can I reduce effort?",
    "Can I cut costs?",
    "How can I simplify it?",
    "What’s non-essential or unnecessary?"
]

var rePrompts = [
    "What can I rearrange in some way can I interchange components, the pattern, or the layout?",
    "Can I change the pace or schedule?",
    "What would I do if part of your problem, product or process worked in reverse?",
    "I can rearrange what in what way such that this happens?"
]

const scamperQuestion = document.getElementById("scamperQuestion")

var questionNumber = 0;

//changes the prompts when they click on change prompt button
function changePrompt(){
    questionNumber = questionNumber + 1;

    if (scamperLetter.innerHTML == "Subsitute") {
        if (subPrompts[questionNumber] == undefined){
            questionNumber = 0;
            console.log("youuuuu")
        }
        scamperQuestion.innerHTML = subPrompts[questionNumber]
    }

    if (scamperLetter.innerHTML == "Combine") {
        if (comPrompts[questionNumber] == undefined){
            questionNumber = 0;
        }
        scamperQuestion.innerHTML = comPrompts[questionNumber]
    }

    if (scamperLetter.innerHTML == "Adapt") {
        if (adaPrompts[questionNumber] == undefined){
            questionNumber = 0;
        }
        scamperQuestion.innerHTML = adaPrompts[questionNumber]
    }

    if (scamperLetter.innerHTML == "Modify") {
        if (modPrompts[questionNumber] == undefined){
            questionNumber = 0;
        }
        scamperQuestion.innerHTML = modPrompts[questionNumber]
    }

    if (scamperLetter.innerHTML == "Put to other uses") {
        if (putPrompts[questionNumber] == undefined){
            questionNumber = 0;
        }
        scamperQuestion.innerHTML = putPrompts[questionNumber]
    }

    if (scamperLetter.innerHTML == "Elaborate") {
        if (eliPrompts[questionNumber] == undefined){
            questionNumber = 0;
        }
        scamperQuestion.innerHTML = eliPrompts[questionNumber]
    }

    if (scamperLetter.innerHTML == "Redesign") {
        if (rePrompts[questionNumber] == undefined){
            questionNumber = 0;
        }
        scamperQuestion.innerHTML = rePrompts[questionNumber]
    }
}

dropDownList();

function dropDownList(){
    const options = document.getElementsByTagName("option");
    i = 1
    for (item of options){
        if (localStorage.getItem("brainstormIdea" + i) && item.value != "Change"){
        item.innerHTML = localStorage.getItem("brainstormIdea" + i)
        i = i + 1;
        }
        else{
            continue
        }
    }
}

const potentialIdeas = document.querySelectorAll("textarea");
const thisIdeaInput = document.getElementById("inputThisIdea")
const ideaButton = document.getElementsByClassName("ideaButton")

//when user clicks on brainstorm idea, this adds all the ideas to storage on brainsotrm page 
//and adds the number of the idea to sotrage to be used for set this idea
function thisIdea(ideaNumber){
    addIdeasStorage()
    localStorage.setItem("chosenIdeaNumber", ideaNumber.toString())
}

//activates everytime on scmaper page to 
if (document.getElementById("chosenID") && document.getElementsByClassName("default")){
    var hello = localStorage.getItem("chosenIdeaNumber")
    setThisIdea(localStorage.getItem("brainstormIdea" + hello))
}

function setThisIdea(dropDownOption){
        const ideaInPlay = document.getElementById("chosenID").classList
        thisIdeaInput.innerHTML = "This Idea: " + dropDownOption;
        ideaInPlay.remove(ideaInPlay.item(1))
        for (i = 0; i < localStorage.length; i++) {
            if (localStorage.getItem(localStorage.key(i)) == dropDownOption){
                console.log(localStorage.key(i))
                ideaInPlay.add(localStorage.key(i))
                break
            }
          } 
}

if (document.getElementById("chosenID")){
    changeThisIdea();
}

function changeThisIdea(){
   const selectionIdeas = document.getElementById("allIdeas")
   selectionIdeas.addEventListener('change', (event) => {
       setThisIdea(event.target.value);
   })
}



