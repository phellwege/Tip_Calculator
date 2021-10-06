
function CalcTip() {
    var billAmt = document.getElementById("billMe").value;
    var numOfPeople = document.getElementById("numberOfPeople").value;
    var tipPercent = document.getElementById("buttons_form").value;
    var total = document.getElementById("total").value;
        
    if (billAmt === "" || numOfPeople < 1) {
        alert("Can't be zero");
        return;
    }
    if (numOfPeople === "" || numOfPeople <=1){
        numberOfPeople = 1;
    }
    var total = (billAmt * tipPercent) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

