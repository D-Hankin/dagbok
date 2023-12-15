const newEntryFormSaveBtn = document.getElementById("newEntryFormSaveBtn");
const newEntryInputTitle = document.getElementById("inputTitle");
const newEntryInputTextArea = document.getElementById("inputTextArea");
const body = document.getElementById("body");
const itemIdTd = document.getElementsByClassName("itemIdTd");
const userEntryTableRows = document.getElementsByClassName("userEntryTableRows");
let idNumbers = document.getElementsByClassName("idNumberLabels");
let idNumber = new Set();

for (let i = 0; i < idNumbers.length; i++) {    
    idNumber.add(idNumbers[i].innerText);
    idNumbers[i].innerText = "";

}

let editButtonArray = document.getElementsByClassName("editButtons");
let editButtonsValues = new Set();

for (let i = 0; i < editButtonArray.length; i++) {
    editButtonsValues.add(editButtonArray[i].id);  
    let singleButton = document.getElementById(editButtonsValues[i]);
    console.log(singleButton);
    editButtonArray[i].addEventListener("click", () => {
        console.log("click");
        let editBoxContainer = document.createElement("div");
        editBoxContainer.setAttribute("id", "editBoxContainer");
        let editBox = document.createElement("form");
        editBox.setAttribute("id", "editBox");
        let body = document.getElementById("body");
        let editBoxLabel = document.createElement("label");
        editBoxLabel.setAttribute("id", "editBoxLabel");
        editBoxLabel.innerText = "Need to remove some evidence? Go ahead..."
        editBox.appendChild(editBoxLabel);
        let editBoxInput = document.createElement("input");
        editBoxInput.setAttribute("id", "editBoxInput");
        editBox.appendChild(editBoxInput);
        let editBoxSaveButton = document.createElement("button");
        editBoxSaveButton.setAttribute("id", "editBoxSaveButton");
        editBoxSaveButton.innerText = "Save";
        editBox.appendChild(editBoxSaveButton);
        let editBoxCancelButton = document.createElement("button");
        editBoxCancelButton.setAttribute("id", "editBoxCancelButton");
        editBoxCancelButton.innerText = "Cancel";
        editBox.appendChild(editBoxCancelButton);
        editBoxContainer.appendChild(editBox);
        body.appendChild(editBoxContainer);

    })
}

console.log(idNumber);
console.log(editButtonsValues);

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
