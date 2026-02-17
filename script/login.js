document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;

    const password = document.getElementById("password").value;
    const convertPassword = parseInt(password);

    if( accountNumber === '01518759172' ) {
        if(convertPassword === 1234) {
            window.location.href = './main.html';
        }
        else{
            alert('invalid password');
        }
    } 
    else{
        alert('invalid number');
    }
})

console.log('yes');