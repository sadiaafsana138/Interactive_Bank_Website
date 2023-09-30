//bank calculation for diposite
document.getElementById('btn-diposit').addEventListener('click', function () {
    //New Diposit amount (.value) from input field 
    const NewDipositAmount = parseFloat(document.getElementById('New-Diposit-Amount').value);
    //console.log(NewDipositAmount);
    //prev Diposit amount (.value) from non input field 
    let DipositCurrentAmount = parseFloat(document.getElementById('Diposit-Current-Amount').innerText);
    if (NewDipositAmount > 0) {
        //console.log(DipositCurrentAmount);
        DipositCurrentAmount += NewDipositAmount;
        //console.log(DipositCurrentAmount);
        document.getElementById('Diposit-Current-Amount').innerText = DipositCurrentAmount;
        let BalanceCurrentAmount = parseFloat(document.getElementById('Balance-Current-Amount').innerText);
        //console.log(BalanceCurrentAmount);
        BalanceCurrentAmount += NewDipositAmount;
        //console.log(BalanceCurrentAmount);
        document.getElementById('Balance-Current-Amount').innerText = BalanceCurrentAmount;
        //clear the field
        document.getElementById('New-Diposit-Amount').value = "";
    }
    else {
        alert("Enter a Valid Amount to deposit!!")
    }
});


document.getElementById('btn-withdraw').addEventListener('click', function () {
    //New withdraw amount (.value) from input field 
    const NewWithdrawAmount = parseFloat(document.getElementById('New-Withdraw-Amount').value);
    //console.log(NewWithdrawAmount);
    //prev Withdraw amount (.value) from non input field 
    let WithdrawCurrentAmount = parseFloat(document.getElementById('Withdraw-Current-Amount').innerText);
    let BalanceCurrentAmount = parseFloat(document.getElementById('Balance-Current-Amount').innerText);
    //console.log(BalanceCurrentAmount);
    //clear the field
    document.getElementById('New-Withdraw-Amount').value = "";
    if (BalanceCurrentAmount >= NewWithdrawAmount) {
        //console.log(WithdrawCurrentAmount);
        WithdrawCurrentAmount += NewWithdrawAmount;
        //console.log(DipositCurrentAmount);
        document.getElementById('Withdraw-Current-Amount').innerText = WithdrawCurrentAmount;
        BalanceCurrentAmount -= NewWithdrawAmount;
        //console.log(BalanceCurrentAmount);
        document.getElementById('Balance-Current-Amount').innerText = BalanceCurrentAmount;    
    }
    else {
        alert("No Sufficient Money!!!")
    }
});


document.getElementById('btn-logout').addEventListener('click',function(){
        window.location.href = "index.html";
})
