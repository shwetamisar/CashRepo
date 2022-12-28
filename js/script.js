const billAmount   =  document.querySelector("#bill-amount");
const cashGiven    =  document.querySelector("#cash-given");
const checkButton  =  document.querySelector("#check-button");
const message      =  document.querySelector("#error-message");
const noOfNotesRow=document.querySelectorAll('.no-of-notes')

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", validateCashAndBillAmount)
function validateCashAndBillAmount(){
    const cashAmt = parseInt(cashGiven.value);
    const billAmt = parseInt(billAmount.value);

    if(billAmt > 0){

        if(cashAmt > billAmt){
            const cashToBeReturned = cashAmt - billAmt;
            calculateChange(cashToBeReturned);
            message.style.display ="none";
        }else if(cashAmt < billAmt){
            message.innerText = "Do you wanna wash plates?"
            message.style.color = "blue";
        }else{
            message.innerText = "Thanks,for shopping with us!"
            message.style.color = "blue";
        }

    }
    else{
        message.innerText = "Invalid Bill Amount";
        message.style.color = "Red";
    }
}

function calculateChange(cashToBeReturned){
    for(let i =0; i < availableNotes.length; i++){
        const noOfNotes = Math.trunc(cashToBeReturned/availableNotes[i]);
        cashToBeReturned%=availableNotes[i];
        noOfNotesRow[i].innerText = noOfNotes;

    }
}