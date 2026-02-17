const sections = [
    "add-money-section",
    "cash-out-section",
    "transfer-money-section",
    "get-bonus-section",
    "pay-bill-section",
    "transaction-history-section"
];

document.getElementById('add-money-btn').addEventListener("click", function () {
    showSection("add-money-section");
})
document.getElementById('cash-out-btn').addEventListener("click", function () {
    showSection("cash-out-section");
})
document.getElementById('transfer-money-btn').addEventListener("click", function () {
    showSection("transfer-money-section");
})
document.getElementById('get-bonus-btn').addEventListener("click", function () {
    showSection("get-bonus-section");
})
document.getElementById('pay-bill-btn').addEventListener("click", function () {
    showSection("pay-bill-section");
})
document.getElementById('transaction-history-btn').addEventListener("click", function () {
    showSection("transaction-history-section");
})

function showSection(activeId) {
    sections.forEach(id => {
        document.getElementById(id).style.display = "none";
    })
    document.getElementById(activeId).style.display = "block";
}


