// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//get a reference to the call Total Element 
const callsTotalElem2 = document.querySelector(".callTotalTwo");
//get a refernece to the sms Total Element
const smsTotalElem2 = document.querySelector(".smsTotalTwo");
//get a reference to the Total Cost Element 
const totalCostElem2 = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var callsTotal2 = 0;
var smsTotal2 = 0;
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function radioBillTotal(){
    // get the value entered in the billType text field
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
    // update the correct total 
    if (billItemType === "call"){
        callsTotal2 += 2.75;
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }
    callsTotalElem2.innerHTML = callsTotal2.toFixed(2);
    smsTotalElem2.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalCostElem2.innerHTML = totalCost2.toFixed(2);

    if(totalCost2 >= 50){
        totalCostElem2.classList.add("danger");
    }
    else if (totalCost2 < 50){
        totalCostElem2.classList.remove("danger");
    }

    if(totalCost2 >= 30){
        totalCostElem2.classList.add("warning");
    }
    else if (totalCost2 < 30){
        totalCostElem2.classList.remove("warning");
    } 
}
//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", radioBillTotal);