//expense id parseFloat common fn.
function getExpense(expenseId) {
    const getExpenseId = document.getElementById(expenseId)
    const expenseIdValue = getExpenseId.value;
    const expenseIdValueFloat = parseFloat(expenseIdValue)
    return expenseIdValueFloat;
}
//sum expense & set total expense inner text
function sumTotalExpense() {
    const foodExpense = getExpense('food-input')
    const rentExpense = getExpense('rent-input')
    const clothesExpense = getExpense('clothes-input')
    const sumExpense = foodExpense + rentExpense + clothesExpense;
    return sumExpense;
}
/* ***********
common function
****************************** */
function updateTotalExpense() {
    const callSumTotalExpense = sumTotalExpense()
    //update total expense
    document.getElementById('total-expense').innerText = callSumTotalExpense;

}
/* ***********
common function
****************************** */
function UpdateBalance() {
    const getIncomeInputValue = document.getElementById('income-input').value
    const getIncomeInputValueFloat = parseFloat(getIncomeInputValue)
    const callSumTotalExpense = sumTotalExpense()
    //udate balance
    document.getElementById('balance').innerText = getIncomeInputValueFloat - callSumTotalExpense;
}
//set an error
/* function setError() {
    const getFood = document.getElementById('food-input')
    const getFoodValue = getFood.value
    const getFoodValueFloat = parseFloat(getFoodValue)
    const getRent = document.getElementById('rent-input')
    const getRentValue = getRent.value
    const getRentValueFloat = parseFloat(getRentValue)
    const getClothes = document.getElementById('clothes-input')
    const getClothesValue = getClothes.value
    const getClothesValueFloat = parseFloat(getClothesValue)
    const getIncome = document.getElementById('income-input')
    const getIncomeValue = getIncome.value
    const getIncomeValueFloat = parseFloat(getIncomeValue)

    if (typeof (getFoodValueFloat) != 'number' && typeof (getRentValueFloat) != 'number' && typeof (getClothesValueFloat) != 'number' && typeof (getIncomeValueFloat) != 'number') {
        const getErrorMassage = document.getElementById('error-massage')
        getErrorMassage.style.display = 'block';
    }
    else {
        const getErrorMassage = document.getElementById('error-massage')
        getErrorMassage.style.display = 'none';

    }
} */
document.getElementById('calculate-btn').addEventListener('click', function () {
    const getFood = document.getElementById('food-input')
    const getFoodValue = getFood.value
    const getRent = document.getElementById('rent-input')
    const getRentValue = getRent.value
    const getClothes = document.getElementById('clothes-input')
    const getClothesValue = getClothes.value
    const getIncome = document.getElementById('income-input')
    const getIncomeValue = getIncome.value
    const getErrorMassage = document.getElementById('error-massage')
    if (getFoodValue > 0 && getRentValue > 0 && getClothesValue > 0 && getIncomeValue > 0 && isNaN(getFoodValue) == false && isNaN(getRentValue) == false && isNaN(getClothesValue) == false && isNaN(getIncomeValue) == false) {
        updateTotalExpense()
        UpdateBalance()
        const getErrorMassage = document.getElementById('error-massage')
        getErrorMassage.style.display = 'none';
    }
    else {
        const getErrorMassage = document.getElementById('error-massage')
        getErrorMassage.style.display = 'block';
    }
    // setError()
    // getFood.value = '';
    // getRent.value = '';
    // getClothes.value = '';
    // getIncome.value = '';
})

document.getElementById('save-btn').addEventListener('click', function () {
    const getsaveInputValue = document.getElementById('save-input').value;
    const getsaveInputValueFloat = parseFloat(getsaveInputValue)
    const getIncomeInputValue = document.getElementById('income-input').value
    const getIncomeInputValueFloat = parseFloat(getIncomeInputValue)
    const saveparsent = getsaveInputValueFloat / getIncomeInputValueFloat * 100;
    const getBalanceInner = document.getElementById('balance').innerText
    const getBalanceInnerFloat = parseFloat(getBalanceInner)
    const getSavingAmmount = document.getElementById('saving-ammount').innerText
    const getSavingAmmountFloat = parseFloat(getSavingAmmount)
    const remaining = getBalanceInnerFloat - getSavingAmmountFloat;
    // update Remaining Balance saving ammount
    if (getsaveInputValue > 0 && getIncomeInputValue > 0) {
        document.getElementById('saving-ammount').innerText = saveparsent;
        document.getElementById('remaining-balance').innerText = remaining;

    }
})