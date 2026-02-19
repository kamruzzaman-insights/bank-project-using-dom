function getElement(id) {
    return document.getElementById(id);
}

function showSection(activeId) {
    sections.forEach(id => {
        document.getElementById(id).style.display = "none";
    })
    document.getElementById(activeId).style.display = "block";
}

function getValueFromInputField (id) {
    const value = document.getElementById(id).value;
    return parseFloat(value);
}

function getValueFromElement (id) {
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}

function setValueToElement (id, amount) {
    document.getElementById(id).innerText = amount;
}