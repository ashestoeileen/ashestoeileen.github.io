function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVAl= document.getElementById("countDownButton").innerHTML;
    var newVal = currentVAl - 1;
    document.getElementById("countDownButton").innerHTML = newVal;
}