function cls(num) {
    document.getElementById("display");
    display.value +=num
}

function getNumber(num) {
    document.getElementById("display");
    display.value +=num
}

function getdisplay(){
    var display = document.getElementById("display");
    display.value = eval(display.value);
    } 
function cls(){
    var display = document.getElementById("display");
    display.value = " ";
}
function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function del() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function sqrt() {
    var x = document.getElementById("display").value;
    display.value = Math.sqrt(x);
}

function power() {
    var x = document.getElementById("display").value;
    display.value = Math.pow(x, 2);
}

function cube() {
    var x = document.getElementById("display").value;
    display.value = Math.pow(x, 3);
}
