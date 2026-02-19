getElement("add-money-event-btn").addEventListener("click", function(){ 
    const addMoney = getValueFromInputField("add-money-input-field");
    const totalAmount = getValueFromElement("total-amount");
    const newTotalAmount = addMoney + totalAmount;
    setValueToElement("total-amount", newTotalAmount);
})