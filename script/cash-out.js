getElement("cash-out-event-btn").addEventListener("click", function(){
    const cashOutMoney = getValueFromInputField("cash-out-money-input-field");
    const totalAmount = getValueFromElement("total-amount");
    const newTotalAmount = totalAmount - cashOutMoney;
    setValueToElement("total-amount", newTotalAmount);
})