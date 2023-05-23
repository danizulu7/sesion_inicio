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

let btnPassVisibility2 = document.querySelector('#changePassVisibilityBtn2');
let passInput2 = document.querySelector('#password2');

btnPassVisibility2.addEventListener('click', function(){
    if(passInput2.type === "password"){
        passInput2.type = 'text';
        btnPassVisibility2.innerText ='🔐';
    } else {
        passInput2.type = 'password';
        btnPassVisibility2.innerText ='👁';
    }
})

let form = document.querySelector("#post-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let pass1 = document.querySelector("#password").value;
    let pass2 = document.querySelector("#password2").value;
    let data = new FormData(e.target);
    let alertPass = document.querySelector("#alert-pass")
    let success = document.querySelector("#success")
    let container = document.querySelector(".container");
    let containerSuccess = document.querySelector(".container-success");
    let name = document.querySelector("#name");
    let user = document.querySelector("#user");
    // let email = document.querySelector("#email");
    // let formAsJSON = object.fromEntries(data);
    if(pass1 !== pass2){
        return alertPass.innerText = `** ¡Las contraseñas no coinciden!`;
    } 
    fetch(e.target.action, {
        method: form.method,
        body: data,
        // body: JSON.stringify({
        //     name: name,
        //     user: user,
        //     pass: pass1,
        //     email: email
        // }),
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          success.innerText = `Gracias por tu registro con nosotros, tu usuario y contraseña han sido creadas en nuestra base de datos.`;
          container.classList.add("visibilityOff");
          containerSuccess.classList.remove("visibilityOff");
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
              alert("Oops! There was a problem submitting your form");
            }
          })
        }
      }).catch(error => {
        alert("Oops! There was a problem submitting your form");
      });
})