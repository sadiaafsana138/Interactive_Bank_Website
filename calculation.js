//bank calculation for diposite
document.getElementById('btn-diposit').addEventListener('click',function(){
    //New Diposit amount (.value) from input field 
    const NewDipositAmount = parseFloat(document.getElementById('New-Diposit-Amount').value);
    //console.log(NewDipositAmount);
    //prev Diposit amount (.value) from non input field 
    let DipositCurrentAmount = parseFloat(document.getElementById('Diposit-Current-Amount').innerText);
    //console.log(DipositCurrentAmount);
    DipositCurrentAmount += NewDipositAmount;
    //console.log(DipositCurrentAmount);
    document.getElementById('Diposit-Current-Amount').innerText = DipositCurrentAmount;

    let BalanceCurrentAmount = parseFloat(document.getElementById('Balance-Current-Amount').innerText);
    //console.log(BalanceCurrentAmount);
    BalanceCurrentAmount += NewDipositAmount;
    //console.log(BalanceCurrentAmount);
    document.getElementById('Balance-Current-Amount').innerText = BalanceCurrentAmount;
});
