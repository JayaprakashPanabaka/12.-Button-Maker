let btnBgColor = document.getElementById("bgColor");
let btnFontColor = document.getElementById("fontColor");
let btnFontSize = document.getElementById("fontSize");
let btnFontWeight = document.getElementById("fontWeight");
let btnPadding = document.getElementById("padding");
let btnBorderRadius = document.getElementById("borderRadius");

let customButton = document.getElementById("customButton")


function onApply() {
    // console.log('Darling');
    // console.log(btnBgColor.value);
    customButton.style.backgroundColor = btnBgColor.value;
    customButton.style.color = btnFontColor.value;
    customButton.style.fontSize = btnFontSize.value;
    customButton.style.fontWeight = btnFontWeight.value;
    customButton.style.padding = btnPadding.value;
    customButton.style.borderRadius = btnBorderRadius.value;
}

























