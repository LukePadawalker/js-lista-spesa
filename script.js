console.log("JS OK");


const array = ["burro", "latte", "uova", "pane", "prosciutto", "grana_padano", "biscotti"];

let finalMessage = document.getElementById("paragraph").innerText;

let counter = 0;

while (counter < array.length){
    finalMessage += array[counter];

    counter += 1;
}