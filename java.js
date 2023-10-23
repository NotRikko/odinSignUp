let confirmPassword = document.querySelector("#confirmPassword");
let password = document.querySelector("#password");

confirmPassword.addEventListener("input",() => {
    if (password.value === confirmPassword.value) {
        confirmPassword.style.border ="1px solid green";
    }
    else confirmPassword.style.border ="1px solid red";
}) 

confirmPassword.addEventListener("focus",() => {
    if (password.value === confirmPassword.value) {
        confirmPassword.style.border ="1px solid green";
    }
    else confirmPassword.style.border ="1px solid red";
}) 

confirmPassword.addEventListener("blur", () => {
    confirmPassword.style.border = "none";
    confirmPassword.style.borderBottom = "1px solid white";
})


