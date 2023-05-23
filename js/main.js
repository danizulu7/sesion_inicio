let btnPassVisibility = document.querySelector('#changePassVisibilityBtn');
let passInput = document.querySelector('#password');

btnPassVisibility.addEventListener('click', function(){
    if(passInput.type === "password"){
        passInput.type = 'text';
        btnPassVisibility.innerText ='🔐';
    } else {
        passInput.type = 'password';
        btnPassVisibility.innerText ='👁';
    }
})