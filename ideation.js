

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



if (document.getElementById('addingIdeas')){
    includeName();
}

else if(document.getElementsByClassName('name')){
    nameBooster();
}


function includeName(){
    const userName = document.getElementsByClassName('name');
    userName[0].innerHTML = 'Hi ' + localStorage.getItem('Name') + '!';
    userName[1].innerHTML = userName[1].innerHTML + ' ' + localStorage.getItem('Name') + '!';
}

function nameBooster(){
    const userName = document.getElementsByClassName('name');
    userName[0].innerHTML = userName[0].innerHTML + ' ' + localStorage.getItem('Name') + '!';
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
        if (item.includes('brainstormIdea') && item.includes('frm') === false 
         && item.includes('overview') == false && item.includes('storyboard') == false
         && item.includes('important') == false && item.includes('brainstormIdea1') === false 
         && item.includes('null') == false){
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
  const scamperQuestion = document.getElementById("scamperQuestion")
  const highlight = (document.getElementsByClassName("highlightCircle"))[0];
  const toolTipText = document.getElementById('example');

  

  function displayS(){
    const ideaInPlay = document.getElementById("chosenID").classList
    console.log("sub")
    scamperLetter.innerHTML = "Subsitute"
    highlight.style.left = "400px"
    scamperQuestion.innerHTML = "Can I substitute one part for another or change any parts?"
    toolTipText.innerHTML = "The first word in the acronym describes a trial and error method. You can look at this from either a product or a process perspective. Think: Is there anything we can substitute within our product/process to make it better?"
    //stores previous idea under letter (frm1...) and chosen idea
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
        //displays idea if there was one previously submitted
        if (localStorage.getItem("frm1" + ideaInPlay[1])){
            document.getElementById("scamperText").value = localStorage.getItem("frm1" + ideaInPlay[1])
        }
        else{
            document.getElementById("scamperText").value = null
        }
    //changes textbox id to the new one
    scamperTextBox.id = "frm1"
    saveBeforeSummary();
}
  function displayC(){
    const ideaInPlay = document.getElementById("chosenID").classList
      scamperLetter.innerHTML = "Combine"
      highlight.style.left = "470px"
      scamperQuestion.innerHTML = "What ideas, materials, features, processes, people, products, or components can I combine?",
      toolTipText.innerHTML = "This means to merge two ideas into one. If you&#39re looking at it from a product perspective, can you take two different products and combine them into one better one? Or, from a process perspective, can you take two different ways of working and combine them into one process?"
      localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
      if (localStorage.getItem("frm2" + ideaInPlay[1])){
        document.getElementById("scamperText").value = localStorage.getItem("frm2" + ideaInPlay[1])
    }
    else{
        document.getElementById("scamperText").value = null
    }
      scamperTextBox.id = "frm2"
      saveBeforeSummary();
  }

  function displayA(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Adapt"
    highlight.style.left = "550px"
    scamperQuestion.innerHTML = "Which part of the product could I change?";
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm3" + ideaInPlay[1])){
        document.getElementById("scamperText").value = localStorage.getItem("frm3" + ideaInPlay[1])
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm3"
    saveBeforeSummary();
}

function displayM(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Modify"
    highlight.style.left = "625px"
    scamperQuestion.innerHTML = "What can I magnify or make larger?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm4" + ideaInPlay[1])){
        document.getElementById("scamperText").value = localStorage.getItem("frm4" + ideaInPlay[1])
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm4"
    saveBeforeSummary();
}

function displayP(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Put to other uses"
    highlight.style.left = "700px"
    scamperQuestion.innerHTML = "What else can it be used for?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm5" + ideaInPlay[1])){
        document.getElementById("scamperText").value = localStorage.getItem("frm5" + ideaInPlay[1])
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm5"
    saveBeforeSummary();
}

function displayE(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Elaborate"
    highlight.style.left = "775px"
    scamperQuestion.innerHTML = "What can I remove without altering its function?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    if (localStorage.getItem("frm6" + ideaInPlay[1])){
        document.getElementById("scamperText").value = localStorage.getItem("frm6" + ideaInPlay[1])
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm6"
    saveBeforeSummary();
}

function displayR(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperLetter.innerHTML = "Redesign"
    highlight.style.left = "850px"
    scamperQuestion.innerHTML = "What can I rearrange in some way can I interchange components, the pattern, or the layout?",
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    //displays any previous ideas in R
    if (localStorage.getItem("frm7" + ideaInPlay[1])){
        document.getElementById("scamperText").value = localStorage.getItem("frm7" + ideaInPlay[1])
    }
    else{
        document.getElementById("scamperText").value = null
    }
    scamperTextBox.id = "frm7"
    saveBeforeSummary();
}

function saveBeforeSummary(){
    const ideaInPlay = document.getElementById("chosenID").classList;
    localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
    localStorage.setItem("scamperLetter", scamperLetter.innerHTML)
    localStorage.setItem("scamperQuestion", scamperQuestion.innerHTML)
    localStorage.setItem("scamperID", scamperTextBox.id)
    localStorage.setItem("highlight", highlight.style.left)
    localStorage.setItem("tooltip", toolTipText.innerHTML)
}

function initialDisplay(){
    const ideaInPlay = document.getElementById("chosenID").classList
    scamperTextBox.id = localStorage.getItem("scamperID")
    for (i = 1; i < 8; i++) {
        if (document.getElementById("frm" + i)){
            if (localStorage.getItem("frm" + i + ideaInPlay[1])){
                document.getElementById("scamperText").value = localStorage.getItem("frm" + i + ideaInPlay[1])
            }
            else{
                document.getElementById("scamperText").value = null
            }
            break

        }
        else{
            continue
        }
    }
    if(localStorage.getItem("scamperLetter")){
        scamperLetter.innerHTML = localStorage.getItem("scamperLetter");
        scamperQuestion.innerHTML = localStorage.getItem("scamperQuestion");
        highlight.style.left = localStorage.getItem("highlight")
        toolTipText.innerHTML = localStorage.getItem("tooltip")

    }
}

//when first clicking/refresh on SCAMPER page, will display subsitute text area either null or previous idea
if (document.getElementById('scamperAcronym')){
    console.log("kelly")
    initialDisplay();
}

//When they click edit on scamper summary, will go back to scamper
//on that letter
function clickEdit(scamperSection, scamperPrompt, form){
    localStorage.setItem("scamperLetter", scamperSection)
    localStorage.setItem("scamperQuestion", scamperPrompt)
    localStorage.setItem("scamperID", form)
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

var questionNumber = 0;

//changes the prompts when they click on change prompt button
function changePrompt(){
    questionNumber = questionNumber + 1;

    if (scamperLetter.innerHTML == "Subsitute") {
        if (subPrompts[questionNumber] == undefined){
            questionNumber = 0;
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
const ideaTooltip = document.getElementById("inputThisIdeaTooltip")

//when user clicks on brainstorm idea, this adds all the ideas to storage on brainsotrm page 
//and adds the number of the idea to storage to be used for set this idea
function thisIdea(ideaNumber){
    addIdeasStorage()
    localStorage.setItem("chosenIdeaNumber", ideaNumber.toString())
}


function setThisIdea(currentIdeaNumber){
        localStorage.setItem("chosenIdeaNumber", currentIdeaNumber)
        const ideaInPlay = document.getElementById("chosenID").classList
        //part of display S which saves the previous input before brainstorm idea is changed
        localStorage.setItem(scamperTextBox.id + ideaInPlay[1], (document.getElementById("scamperText")).value)
        thisIdeaInput.innerHTML = "This Idea: " + localStorage.getItem("brainstormIdea" + currentIdeaNumber);
        ideaTooltip.innerHTML = "This Idea: " + localStorage.getItem("brainstormIdea" + currentIdeaNumber);
        //removes old brainstorm idea
        saveBeforeSummary();
        ideaInPlay.remove(ideaInPlay.item(1))
                //adds new chosen brainstorm idea
                ideaInPlay.add("brainstormIdea" + currentIdeaNumber)
                //Executes display S with new brainstorm idea in place
                initialDisplay()
        }

if (document.getElementById("chosenID")){
    changeThisIdea();
}

//activates when scamper page first entered on to input the chosen idea into "This idea"
//SET IDEA IS THE PROBLEM!!
if (document.getElementById("chosenID")){
    console.log("smile")
    var hello = localStorage.getItem("chosenIdeaNumber")
    setThisIdea(hello)
}


//When user clicks on a dropdown option, 
//executes setThisIdea which changes "This Idea" on SCAMPER page
function changeThisIdea(){
    console.log("chanhong")
   const selectionIdeas = document.getElementById("allIdeas")
   selectionIdeas.addEventListener('change', (event) => {
    for (i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) == event.target.value){
            var newNumber = localStorage.key(i).toString();
            newNumber = newNumber.slice(-1);
            thisIdeaInput.innerHTML = "This Idea: " + localStorage.getItem("brainstormIdea" + newNumber);
            ideaTooltip.innerHTML = "This Idea: " + localStorage.getItem("brainstormIdea" + newNumber);

            if(document.getElementById("chosenID")){
                setThisIdea(newNumber);
            }
            else if(document.getElementById("scamperSummary")){
                localStorage.setItem("chosenIdeaNumber", newNumber)
                console.log("boob")
                inputSCAMPERSummary();
            }
            else if(overviewInput){
                saveOverview();
                localStorage.setItem("chosenIdeaNumber", newNumber)
                console.log("whye")
                previousOverviewDisplay(); 
            }
            else if(importantInput){
                saveImportant();
                console.log("hey")
                localStorage.setItem("chosenIdeaNumber", newNumber)
                previousImportantDisplay();  
            }
            else if(finalOverview){
                localStorage.setItem("chosenIdeaNumber", newNumber)
                console.log("tomorrow")
                inputFinalisationSummary();
            }
            else if(storyboardBoxes){
                saveStoryboard();
                localStorage.setItem("chosenIdeaNumber", newNumber)
                console.log("boo")
                previousStoryboardDisplay();  
            }
      break 
   }

}
   })
}

const userScamperSummary = document.getElementsByTagName("p");
const finalIdea = document.getElementById("finalIdea");

//on the SCAMPER summary page, will display all of user inputs to the correct letter
function inputSCAMPERSummary (){
    thisIdeaInput.innerHTML = "This Idea: " + 
    localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
    ideaTooltip.innerHTML = "This Idea: " + 
    localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
    finalIdea.value = localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
    i = 1;
    for (item of userScamperSummary) {
        item.innerHTML = 
        localStorage.getItem("frm" + i + "brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
        i = i + 1;
}
}

//summary of the SCAMPER ideas on scamper summary page
if (document.getElementById("scamperSummary")){
        inputSCAMPERSummary();
        changeThisIdea();
}

function finaliseIdea(){
    localStorage.setItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"), finalIdea.value)
}

//displays this idea
if(document.getElementById("finalWoo")){
    thisIdeaInput.innerHTML = "This Idea: " + 
    localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
    ideaTooltip.innerHTML = "This Idea: " + 
    localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
}


var overviewInput = document.getElementById("overviewInput");

//prints user's previous overview in the textarea
function previousOverviewDisplay(){
    var overviewIdea = localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") + "overview")
    if (overviewIdea){
        overviewInput.value = overviewIdea 
    }
    else{
        overviewInput.value = null;
    }
}

//saves the users overview input
function saveOverview(){
    localStorage.setItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") 
    + "overview", overviewInput.value.toString())
}

if(overviewInput){
    previousOverviewDisplay();
    changeThisIdea();
    saveOverview()
}

const storyboardBoxes = document.getElementsByClassName("storyboard");

//prints user's previous overview in the textarea
function previousStoryboardDisplay(){
    i = 1
    for (item of storyboardBoxes){
        if (localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") 
        + "storyboard" + i)){
            item.value = localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") 
            + "storyboard" + i)
            console.log(localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") 
            + "storyboard" + i))
        }
        else{
           item.value = null;
        }
        i += 1;
    }
}

function saveStoryboard(){
    i=1
    for (item of storyboardBoxes){
        localStorage.setItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") 
        + "storyboard" + i, item.value)
        console.log("hey")
        i += 1
    }
}

if(document.getElementById("onlyStoryboard")){
    previousStoryboardDisplay();
    changeThisIdea();
    saveStoryboard();
}


const importantInput = document.getElementById("importantInput");

//prints user's previous important in the textarea
function previousImportantDisplay(){
    var importantIdea = localStorage.getItem("brainstormIdea" + 
    localStorage.getItem("chosenIdeaNumber") + "important")
    if (importantIdea){
        importantInput.value = importantIdea 
    }
    else{
        importantInput.value = null;
    }
}

//saves the users important input
function saveImportant(){
    localStorage.setItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") 
    + "important", importantInput.value.toString())
}

if(importantInput){
    previousImportantDisplay();
    changeThisIdea();
    saveImportant();
}

const finalOverview = document.getElementById("finalOverview")
const finalStoryboard = document.getElementsByClassName("finalStoryboard")
const finalImportant = document.getElementById("finalImportant")

function inputFinalisationSummary (){
    thisIdeaInput.innerHTML = "This Idea: " + 
    localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
    ideaTooltip.innerHTML = "This Idea: " + 
    localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber"));
    finalOverview.innerHTML = localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") + "overview");
    i = 1;
    for (item of finalStoryboard) {
        item.innerHTML = 
        localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") + "storyboard" + i);
        i = i + 1;
    }
    finalImportant.innerHTML = localStorage.getItem("brainstormIdea" + localStorage.getItem("chosenIdeaNumber") + "important")
}

if(finalOverview){
    inputFinalisationSummary();
    changeThisIdea();
}

setTimeout(showBooster, 30000)

function showBooster(){
    document.getElementById("confidence").style.display = 'block'
}

function confusedShow() {
    var confused = document.getElementById("confused");
    var background = document.getElementById("backgroundConfused")
    if (confused.style.display === "none") {
      confused.style.display = "block";
      background.style.display = "block"
    } else {
      confused.style.display = "none";
      background.style.display = "none";
    }
  } 