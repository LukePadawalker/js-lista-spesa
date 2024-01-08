console.log("JS OK");


const array = ["burro", "latte", "uova", "pane", "prosciutto",]

let counter = 0;

while (counter < array.length){
    document.getElementById("paragraph").innerText = array[counter];

    counter += 1;
}