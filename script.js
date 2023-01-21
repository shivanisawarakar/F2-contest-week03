const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); 
  }
  emailField.classList.remove("invalid"); 
}

//password validation

function createPass()
{
   const passPattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   if(!passInput.value.match(passPattern))
   {
   return  passField.classList.add("invalid");
   }
    passField.classList.remove("invalid");

}

//confirm password validation

function confirmPass()
{
    if(cPassInput.value !== cPassInput.value || cPassInput.value ==="")
    {
     return   cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
 form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    checkEmail();
    createPass();
    confirmPass();

    
    //calling function on keyup 
    emailInput.addEventListener("keyup",checkEmail);
    passInput.addEventListener( "keyup",createPass);
    cPassInput.addEventListener("keyup",confirmPass);

    if(
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ){
        location.href = form.getAttribute("action");
    }
});