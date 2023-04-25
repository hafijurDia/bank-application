
// deposit money
document.getElementById('btn-deposit').addEventListener('click',function(){
    //newdoposit
    const newDeposit = getInputFieldValueById('deposit');
    //prevoius deposit
    const previousDeposit = getElementValueById('total-deposit');
    
    //calulate total deposit
    const depositTotal = previousDeposit + newDeposit;

    //set deposit value
    setElementValueById('total-deposit', depositTotal);

    //get previous balance by using function
    const previousBalance = getElementValueById('total-balance');
    const newBalance = previousBalance + newDeposit;

    setElementValueById('total-balance', newBalance);

})