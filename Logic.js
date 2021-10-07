function CalcTip(billAmt, tipPercent, numOfPeople) {
    if (billAmt === "" || numOfPeople < 1) {
        alert("Can't be zero");
        return;
    }
    var Total = (billAmt * tipPercent) / numOfPeople; 
    Total = Math.round(Total) + (billAmt / numOfPeople);
    Total = Total;
    var Tip = (billAmt * tipPercent) / numOfPeople;
        Tip = Math.round(Tip);
    document.getElementById("tip").innerHTML = Tip.toFixed(2);
    document.getElementById("total").innerHTML = Total.toFixed(2);
}    
    function getId(btn) {
        const DeezeNuts = (btn.id)
        var billAmt = document.getElementById("billMe").value;
        var numOfPeople = document.getElementById("numberOfPeople").value;
        var tipPercent = document.getElementById(DeezeNuts).value;
        CalcTip(billAmt, tipPercent, numOfPeople)
    }
    function Reset() {
        var x = document.getElementById("billMe")
            x = "";
        var y = document.getElementById("numOfPeople")
            y="";
    }