let tableRows = 40; // Define heith
let tableCells = 50; // Define  widith


// make a canvas

let main = document.getElementsByTagName("section")[0];

let nFrame = document.createElement("div");
nFrame.id = "frame";
nFrame.classList.add("table");

main.appendChild(nFrame);

for (let i = 0; i < tableRows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    nFrame.appendChild(row);
    for (let index = 0; index < tableCells; index++) {

        let row = document.getElementsByClassName("row")[i];
        let square = document.createElement("div");
        square.classList.add("cell");

        row.appendChild(square)
    }
}

// color picker

let aside = document.getElementsByTagName("aside")[0];

let colorPicker = document.createElement("input");

colorPicker.type = "color";
colorPicker.id = "colorPicker";
aside.appendChild(colorPicker);

// actual color
let acText = document.createElement("p");
acText.innerHTML = "Color actual";

let actualColor = document.createElement("div");
actualColor.id = "actualColor";
actualColor.classList.add("cColor");
actualColor.style.backgroundColor = "#000"

aside.appendChild(acText)
aside.appendChild(actualColor);

// color picker event
var aColor = "#000000";
var colors = [];

// remember remember the 5th of november
let rContainer = document.createElement('div');
rContainer.id = "rContainer";

let rText = document.createElement('p');
rText.innerHTML = "Últimos colores";
aside.appendChild(rText)
aside.appendChild(rContainer);

function addRemember(element) {

    //console.log("changin color")
    let rContainer = document.getElementById("rContainer");
    rContainer.innerHTML = "";
    if (colors.length < 3) {
        colors.push(element);

    } else {

        colors.shift();
        colors.push(element)
        rContainer.innerHTML = "";
    }

    //add visual options
    //console.log(colors);
    colors.forEach(color => {
        let rCell = document.createElement("div");
        rCell.style.backgroundColor = color;
        rCell.classList.add("cColor");
        rCell.classList.add("rColor")
        rContainer.appendChild(rCell);
    });
    document.querySelectorAll(".rColor").forEach((element) => {

        element.addEventListener('click', () => {
            //console.log(element.style.backgroundColor)
            changeColor(element.style.backgroundColor)
        })


    });
}


function changeColor(element) {
    document.getElementById("actualColor").style.backgroundColor = element;
    aColor = element;
    addRemember(element)
}


colorPicker = document.getElementById("colorPicker").addEventListener('change', () => {
    let getColor = event.srcElement.value;
    //console.log(colors)
    changeColor(getColor);
});

// canvas paint 
let paint = false;
let frame = document.getElementById("frame");
frame.addEventListener('mousedown', () => {
    paint ^= true;
});

document.querySelectorAll(".cell").forEach((element) => {

    element.addEventListener('mousemove', () => {
        if (paint) {
            //console.log(aColor)
            element.style.backgroundColor = aColor;
            frame.classList.add("cursor");
        } else {
            frame.classList.remove("cursor");
        }
    })


});