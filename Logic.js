
function CalcTip(billAmt, tipPercent, numOfPeople) {
    var billAmt = document.getElementById("billMe").value;
    var numOfPeople = document.getElementById("numberOfPeople").value;
    var tipPercent = document.getElementById("buttons_form").value;

        console.log(billAmt)

        console.log(numOfPeople)

        console.log(tipPercent)

    if (billAmt === "" || numOfPeople < 1) {
        alert("Can't be zero");
        return;
    }

    var Total = (billAmt * tipPercent) / numOfPeople; 
    Total = Math.round(Total) + (billAmt / numOfPeople);
    Total = Total.toFixed(2);
    Total = Total;
    
    console.log(billAmt* tipPercent)

    var Tip = (billAmt * tipPercent) / numOfPeople;
        Tip = Math.round(Tip);
        Tip = Tip.toFixed(2);

    document.getElementById("tip").innerHTML = Tip;
    document.getElementById("total").innerHTML = Total;
}
