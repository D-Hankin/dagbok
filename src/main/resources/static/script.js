const newEntryFormSaveBtn = document.getElementById("newEntryFormSaveBtn");
const newEntryInputTitle = document.getElementById("inputTitle");
const newEntryInputTextArea = document.getElementById("inputTextArea");
const body = document.getElementById("body");
const itemIdTd = document.getElementsByClassName("itemIdTd");
const userEntryTableRows = document.getElementsByClassName("userEntryTableRows");
let idNumbers = document.getElementsByClassName("idNumberLabels");
let idNumber = new Set();
const editBoxContainer = document.getElementById("editBoxContainer")
const editBox = document.getElementById("editBoxForm");

for (let i = 0; i < idNumbers.length; i++) {    
    idNumber.add(idNumbers[i].innerText);
    idNumbers[i].innerText = "";

}

let editButtonArray = document.getElementsByClassName("editButtons");
let editButtonsValues = new Set();

for (let i = 0; i < editButtonArray.length; i++) {
    editButtonsValues.add(editButtonArray[i].id);  
    //console.log(editButtonArray[i].id)
    editButtonArray[i].addEventListener("click", () => {
        //console.log("click");
        let editBoxLabel = document.createElement("label");
        editBoxLabel.setAttribute("id", "editBoxLabel");
        editBoxLabel.innerText = "Need to remove some evidence? Go ahead...";
        editBox.appendChild(editBoxLabel);
        let editTitleInput = document.createElement("input");
        editTitleInput.setAttribute("id", "editTitleInput");
        editTitleInput.setAttribute("name", "editTitleInput");
        editBox.appendChild(editTitleInput);
        let editBoxInput = document.createElement("textarea");
        editBoxInput.setAttribute("id", "editBoxInput");
        editBoxInput.setAttribute("name", "editBoxInput");
        editBoxInput.setAttribute("rows", "4");
        editBoxInput.setAttribute("cols", "50");
        editBoxInput.setAttribute("maxlength", "128");
        editBox.appendChild(editBoxInput);
        let editBoxDate = document.createElement("input");
        editBoxDate.setAttribute("type", "date");
        editBoxDate.setAttribute("id", "editBoxDate");
        editBoxDate.setAttribute("name", "editBoxDate");
        editBox.appendChild(editBoxDate);
        let editBoxSaveButton = document.createElement("button");
        editBoxSaveButton.setAttribute("id", "editBoxSaveButton");
        editBoxSaveButton.innerText = "Save";
        editBox.appendChild(editBoxSaveButton);
        let editBoxCancelButton = document.createElement("label");
        editBoxCancelButton.setAttribute("id", "editBoxCancelButton");
        editBoxCancelButton.innerText = "Cancel";
        editBox.appendChild(editBoxCancelButton);
        cancel();
        const editButtonId = editButtonArray[i].id;
        console.log(editButtonId);
        const correspondingSpan = document.querySelector(`[data-edit-button="${editButtonId}"]`);
        /*let entryTitleArray = document.getElementsByClassName("entryTitle");
        let entryTitles = [...entryTitleArray];
        let entryTextArray = document.getElementsByClassName("entryText");
        let entryTexts = [...entryTextArray];*/
        console.log(correspondingSpan);
        if(correspondingSpan) {
            const titleSpan = document.getElementById("title_" + editButtonId)
            const textSpan = document.getElementById("text_" + editButtonId)
            editTitleInput.value = correspondingSpan.innerText;
            editBoxInput.value = correspondingSpan.innerText;
            console.log(correspondingSpan.innerText);
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

function cancel() {
    document.getElementById("editBoxCancelButton").addEventListener("click", () => {
        location.href = "/";
    })
}