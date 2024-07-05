//get global variable
const colorDiv=document.querySelectorAll(".color");
//calling function to generate hexa decimal value
function getRandomColor(){
  const hex=chroma.random();
   return hex;
}
//to get background color and hex values

function getColors() {
    console.log(colorDiv);
    colorDiv.forEach(function(div){
        console.log(div);
       const hexValue=(div.children[0]);
       const random=getRandomColor();
       hexValue.innerText=random;
       div.style.backgroundColor=random;
       getcolorContrast(random,hexValue);
    });
}
getColors();
function getcolorContrast(color,text){
    const luminance=chroma(color).luminance();
    if(luminance>0.5){
        text.style.color="balck";
    }
    else{
        text.style.color="white";
    }
//  console.log(luminance);
}
//  getcolorContrast("red");

// const hexValue=getRandomColor();
// console.log(hexValue);
