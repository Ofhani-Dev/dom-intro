// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");
//get a reference to the call Total Element 
const callsTotalElem = document.querySelector(".callTotalOne");
//get a refernece to the sms Total Element
const smsTotalElem = document.querySelector(".smsTotalOne");
//get a reference to the Total Cost Element 
const totalCostElem = document.querySelector(".totalOne");

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function textBillTotal(){
    // get the value entered in the billType text field
    var  billTypeEntered = billTypeText.value.trim();
    // update the correct total 
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if(totalCost >= 50){
        totalCostElem.classList.add("danger");
    }
    else if (totalCost < 50){
        totalCostElem.classList.remove("danger");
    }

    if(totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
    else if (totalCost < 30){
        totalCostElem.classList.remove("warning");
    }
}
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener("click", textBillTotal);