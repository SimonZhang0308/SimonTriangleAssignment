// Triangle Perimeter CS10 Review

// Variables to store HTML Elements
let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");
let x3 = document.getElementById("x3");
let y3 = document.getElementById("y3");
let button = document.getElementById("calculate");
let output1 = document.getElementById("ab");
let output2 = document.getElementById("ac");
let output3 = document.getElementById("bc");
let output4 = document.getElementById("abc");
let ab = 0;
let ac = 0;
let bc = 0;

// Add Event Listener to Calculate Button
button.addEventListener("click", calculate);

function dict(x1,y1,x2,y2) {
    // input
    let x11 =+ x1.value;
    let y11 =+ y1.value;
    let x22 =+ x2.value;
    let y22 =+ y2.value;
    //process
    let x = Math.abs(x22-x11);
    let y = Math.abs(y11-y22);
    let total = Math.sqrt((x*x)+(y*y));
    //output
    return total;
}
function calculate() {
    //re-declare the variables so the values reset each time
    ab = 0;
    ac = 0;
    bc = 0;``
    ab += dict(x1,y1,x2,y2);
    ac += dict(x1,y1,x3,y3);
    bc += dict(x2,y2,x3,y3);
    output1.innerHTML = ab;
    output2.innerHTML = ac;
    output3.innerHTML = bc;
    output4.innerHTML = ab + ac +bc;
}

