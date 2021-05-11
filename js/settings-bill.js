// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get references to all the setting fields 
    //get a refernece to the call Total Element
    const callCostElem = document.querySelector(".callCostSetting");
    //get a refernece to the sms Total Element
    const smsCostElem = document.querySelector(".smsCostSetting") ;
    //get a refernece to the Total Element
    const warningLevelElem = document.querySelector(".warningLevelSetting");
     //get a refernece to the Total Element
     const criticalLevelElem = document.querySelector(".criticalLevelSetting");

// get refences to all the radio totals
    //get a refernece to the call Total Element
    const callTotalElem3 = document.querySelector(".callTotalSettings");
    //get a refernece to the sms Total Element
    const smsTotalElem3 = document.querySelector(".smsTotalSettings") ;
    //get a refernece to the Total Element
    const totalElem3 = document.querySelector(".totalSettings");

//get a reference to the add button
const billButton = document.querySelector(".billButton");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callCostSetting = 0;
var smsCostSetting = 0; 
var warningLevelSetting = 0;
var criticalLevelSetting = 0;

// create a variables that will keep track of all three totals.
var callTotalSettings = 0;
var smsTotalSettings = 0; 
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click",updateBillSetting);

//add an event listener for when the add button is pressed
billButton.addEventListener("click",finalBillSetting);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function finalBillSetting(){

    totalElem3.classList.remove("warning")
    totalElem3.classList.remove("danger")

    var tickedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked")
    if (tickedRadioBtn){
        var settingsBillItemType = tickedRadioBtn.value
    }
    if (settingsBillItemType === "call"){
        callTotalSettings += callCostSetting;
    }
    else if(settingsBillItemType === "sms"){
        smsTotalSettings += smsCostSetting; 
    }
    callTotalElem3.innerHTML = callTotalSettings.toFixed(2);
    smsTotalElem3.innerHTML = smsTotalSettings.toFixed(2);
    var totalSettings = callTotalSettings + smsTotalSettings;
    totalElem3.innerHTML = totalSettings.toFixed(2);

    if (totalSettings >= warningLevelSetting){
        totalElem3.classList.add("warning")
    }
    if (totalSettings >= criticalLevelSetting){
        totalElem3.classList.add("danger")
    }
}

function updateBillSetting (){

    totalElem3.classList.remove("warning")
    totalElem3.classList.remove("danger")

    callCostSetting = Number(callCostElem.value);
    smsCostSetting = Number(smsCostElem.value);
    warningLevelSetting = Number(warningLevelElem.value);
    criticalLevelSetting = Number(criticalLevelElem.value);

    var totalSettings = callTotalSettings + smsTotalSettings;

    if (totalSettings >= warningLevelSetting){
        totalElem3.classList.add("warning")
    }
    if (totalSettings >= criticalLevelSetting){
        totalElem3.classList.add("danger")
    }
    
}


