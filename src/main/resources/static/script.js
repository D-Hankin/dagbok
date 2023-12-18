const newEntryFormSaveBtn = document.getElementById("newEntryFormSaveBtn");
const newEntryInputTitle = document.getElementById("inputTitle");
const newEntryInputTextArea = document.getElementById("inputTextArea");
const body = document.getElementById("body");
const itemIdTd = document.getElementsByClassName("itemIdTd");
const userEntryTableRows = document.getElementsByClassName("userEntryTableRows");
let idNumbers = document.getElementsByClassName("idNumberLabels");
let idNumber = new Set();
const editBoxContainers = document.getElementsByClassName("editBoxFormContainers")
const editBoxCancelButtons = document.getElementsByClassName("editBoxCancelButtons");

for (let i = 0; i < idNumbers.length; i++) {    
    idNumber.add(idNumbers[i].innerText);
    idNumbers[i].style.display = "none";
    editBoxContainers[i].style.display="none";

}

let editButtonArray = document.getElementsByClassName("editButtons");
let editButtonsValues = new Set();

for (let i = 0; i < editButtonArray.length; i++) {
    editButtonsValues.add(editButtonArray[i].id);  
    //console.log(editButtonArray[i].id)
    editButtonArray[i].addEventListener("click", () => {
        //console.log("click");
        if (editBoxContainers[i].id = idNumbers[i].innerText) {
            editBoxContainers[i].style.display = "block";
        }
        for (let j = 0; j < editButtonArray.length; j++) {
            editButtonArray[j].style.pointerEvents = "none";
        }
    });
}

//console.log(idNumber);
//console.log(editButtonsValues);

document.getElementById("newEntryFormSaveBtn").addEventListener("click", () => {
    if (!newEntryInputTextArea.value.trim() || !newEntryInputTitle.value.trim()) {
        alert("Your diary entries require both a title and body.");
    }
})

function charCountdown() {

    let maxLength = 128;
    let inputTextArea = document.getElementById("inputTextArea");
    let count = document.getElementById("count");
    let remainingChars = maxLength - inputTextArea.value.length;

    count.innerText = remainingChars;
}