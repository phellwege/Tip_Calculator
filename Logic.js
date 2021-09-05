function CalcTip() {
    var billAmt = document.getElementById("billMe").value;
    var numOfPeople = document.getElementById("").value;
    var tipPercent = document.getElementById("").value;
    var total = document.getElementById("").value;

    if (billAmt === "" || numOfPeople < 1) {
        alert("Can't be zero");
        return;
    }
    if (numOfPeople === "" || numOfPeople <=1){
        numberOfPeople = 1;

    document.getElementById("each").style.display = "none";
}else {
    document.getElementById("each").style.display = "block";
}


    var total = (billAmt * tipPercent) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

    document.getElementById("calculate").onclick = function() {
        calculateTip();
}
