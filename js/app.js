function getPin() {
    
    const pin = generatePin();
    const pinNumberStirng = pin + '';

    if (pinNumberStirng.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}



function generatePin() {
    
    const random = Math.round(Math.random() * 10000);
    return random;

}


// Random Pin Input Value
const pinInputField =document.getElementById('random-pin-field');
const pinInputValue = pinInputField.value;


document.getElementById('btn-generate').addEventListener('click', function () {
    

    const pin = getPin();
    pinInputField.value = pin;

})


// calculator-numbers
document.getElementById('calculator-numbers').addEventListener('click', function (event) {
    const calculatorField = document.getElementById('calculator-Field');
    const oldTypedNumber = calculatorField.value;

    const calculatorNumber =event.target.innerText
    if (isNaN(calculatorNumber)) {
        if (calculatorNumber === 'C') {
            calculatorField.value = '';
        }
        else if (calculatorNumber === '<') {
            const digits = oldTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            calculatorField.value = remainingDigits;

        }
        
    }
    else {
        const newTypedNumber = oldTypedNumber + calculatorNumber;
        calculatorField.value = newTypedNumber;
        
    }



})



// Notify Section

const notifySucces = document.getElementById('pin-right');
const notifyWrong = document.getElementById('pin-wrong');

// Submit Button
document.getElementById('btn-submit').addEventListener('click', function () {
    

    const randomNumber = document.getElementById('random-pin-field');
    const randomNumberValue = randomNumber.value;
    const matchingNumber = document.getElementById('calculator-Field');
    const matchingNumberValue = matchingNumber.value;

    if (randomNumberValue === matchingNumberValue) {


        notifySucces.style.display='block'
        notifyWrong.style.display='none'
        matchingNumber.value = '';
         
        randomNumber.value = '';


        
    }
    else {
        notifyWrong.style.display='block'
        notifySucces.style.display='none'
        matchingNumber.value = '';
    }





})




