document.getElementById("editBox").style.display = "none";
let idNumbers = document.getElementsByClassName("idNumberLabels");
let idNumber = new Set();

for (let i = 0; i < idNumbers.length; i++) {    
    idNumber.add(idNumbers[i].innerText);
}

let editButtonArray = document.getElementsByClassName("editButtons");
let editButtonsValues = new Set();

for (let i = 0; i < editButtonArray.length; i++) {
    editButtonsValues.add(editButtonArray[i].id);  
    let singleButton = document.getElementById(editButtonsValues[i]);
    console.log(singleButton);
    editButtonArray[i].addEventListener("click", () => {
        console.log("click");
    })
}

console.log(idNumber);
console.log(editButtonsValues);
/*for (let i = 0; i < editButtonsValues.length; i++) {
    let singleButton = document.getElementById(editButtonsValues[i]);
    console.log(editButtonsValues[i]);
    singleButton.addEventListener("click", () => {
        console.log("click");
    })
}*/

