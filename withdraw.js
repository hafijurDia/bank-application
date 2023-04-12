// withdraw money
document.getElementById('btn-widraw').addEventListener('click',function(){

    //input deposit
    const inputWithdraw = document.getElementById('widraw');
    const newWithdrawString = inputWithdraw.value;
    const newWithdrawfloat = parseFloat(newWithdrawString);

    //total withdraw
    const withdrawElement = document.getElementById('total-widraw');
    const previousWithdrawAmount = withdrawElement.innerText;
    const previousWithdrawFloat = parseFloat(previousWithdrawAmount);
 
    // total balance update
    const previousBalance = document.getElementById('total-balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceFloat = parseFloat(previousBalanceString);

    if(newWithdrawfloat < 1){
        alert('Sorry you cannot input negative value'); 
    }else if(newWithdrawfloat > previousBalanceFloat){
        withdrawElement.innerText = previousWithdrawFloat
    }
    else{
        withdrawElement.innerText = previousWithdrawFloat + newWithdrawfloat;
    }


    if (previousBalanceFloat < newWithdrawfloat) {
        alert('You have not sufficient balance to withdraw');
    }else if(newWithdrawfloat < 1){
        previousBalance.innerText = previousBalanceFloat;
    }else{
        previousBalance.innerText = previousBalanceFloat - newWithdrawfloat;
    }
    


})