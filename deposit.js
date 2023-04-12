// deposit money
document.getElementById('btn-deposit').addEventListener('click',function(){

    //input deposit
    const inputDeposit = document.getElementById('deposit');
    const newDepositString = inputDeposit.value;
    const newDepositfloat = parseFloat(newDepositString);
    inputDeposit.value = '';
    if (isNaN(newDepositfloat)) {
        alert('Please provide a valid number');
        return;
    }
    //total deposit
    const depositElement = document.getElementById('total-deposit');
    const previousAmount = depositElement.innerText;
    const previousAmountFloat = parseFloat(previousAmount);
    depositElement.innerText = previousAmountFloat + newDepositfloat;

    // total balance update
    const previousBalance = document.getElementById('total-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceFloat = parseFloat(previousBalanceString);
    previousBalance.innerText = previousBalanceFloat + newDepositfloat;


})