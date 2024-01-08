console.log("JS OK");

// create the array
const array = ["burro", "latte", "uova", "pane", "prosciutto", "grana_padano", "biscotti"];


// declaration of functions
let finalMessage = document.getElementById("paragraph");
let counter = 0;

// creating the main while cicle
while (counter < array.length){
    // appending the elements
    finalMessage.innerText = finalMessage.innerText + " " + array[counter];
    // exit condition
    counter += 1;
}