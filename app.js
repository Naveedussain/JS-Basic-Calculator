var a = document.getElementById("display")

function getNum(Num) {
    a.value += Num;

}

function calculateValue() {
    var b = a.value;
    a.value = eval(b)

}

function clearValue() {
    a.value = ' '
}