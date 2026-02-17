const sections = [
    "add-money-section",
    "cash-out-section",
    "transfer-money-section",
    "get-bonus-section",
    "pay-bill-section",
    "transaction-history-section"
];

const buttons = {
    "add-money-btn": "add-money-section",
    "cash-out-btn": "cash-out-section",
    "transfer-money-btn": "transfer-money-section",
    "get-bonus-btn": "get-bonus-section",
    "pay-bill-btn": "pay-bill-section",
    "transaction-history-btn": "transaction-history-section"
}




Object.keys(buttons).forEach(btnId => {
  document.getElementById(btnId).addEventListener("click", () => {
    showSection(buttons[btnId]);
  });
});


// document.getElementById('add-money-btn').addEventListener("click", function () {
//     showSection("add-money-section");
// })
// document.getElementById('cash-out-btn').addEventListener("click", function () {
//     showSection("cash-out-section");
// })
// document.getElementById('transfer-money-btn').addEventListener("click", function () {
//     showSection("transfer-money-section");
// })
// document.getElementById('get-bonus-btn').addEventListener("click", function () {
//     showSection("get-bonus-section");
// })
// document.getElementById('pay-bill-btn').addEventListener("click", function () {
//     showSection("pay-bill-section");
// })
// document.getElementById('transaction-history-btn').addEventListener("click", function () {
//     showSection("transaction-history-section");
// })

function showSection(activeId) {
    sections.forEach(id => {
        document.getElementById(id).style.display = "none";
    })
    document.getElementById(activeId).style.display = "block";
}

function hideAllSection () {
    sections.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
}

hideAllSection();


