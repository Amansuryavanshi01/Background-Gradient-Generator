let Btn1 = document.getElementById("MyBtn1");
let Btn2 = document.getElementById("MyBtn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const HexValues = () =>{
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for(i = 0; i < 6; i++){
        colors += myHexValues[Math.floor(Math.random() * 16)];
}
return colors;
};

const handleButton1 = () =>{
     rgb1 = HexValues();
     Btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML =  `Background-image: linear-gradient(to right, ${rgb1}, ${rgb2}`;
}

const handleButton2 = () => {
     rgb2 = HexValues();
     Btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML =  `Background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

Btn1.addEventListener("click", handleButton1);
Btn2.addEventListener("click", handleButton2);

//  For copy text when  click
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
});
