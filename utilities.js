//reduce code using function
function getInputFieldValueById(depositInput){
    const inputDeposit = document.getElementById(depositInput);
    const newDepositString = inputDeposit.value;
    const newDepositfloat = parseFloat(newDepositString);
    inputDeposit.value = '';
    return newDepositfloat;
}
function getElementValueById(elementId){
    const depositElement = document.getElementById(elementId);
    const previousAmount = depositElement.innerText;
    const previousAmountFloat = parseFloat(previousAmount);
    return previousAmountFloat;

}
function setElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerHTML = newValue;
}