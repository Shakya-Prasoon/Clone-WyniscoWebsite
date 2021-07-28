function onClickHandler() {
    let name1= document.getElementById("nameInput1").value;
    let name2= document.getElementById("nameInput2").value;
    document.getElementById("wynisco").textContent = name1 + " " + name2;
}

function infoDescriptionTheme() {
    document.getElementById("infoDescription").classList.toggle("infoDescriptionGoldText");
}

document.getElementById("carImg").addEventListener("click", infoDescriptionTheme);
