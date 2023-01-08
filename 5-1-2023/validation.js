let form = document.querySelector("form");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(phone.value.length)
    if(phone.value.length != 10){
        let phomessage = document.querySelector("#tphone");
        phomessage.style.display = "block";
        phomessage.innerText = "The phone number must want 10 digits";
    } else {
        let phomessage = document.querySelector("#tphone");
        phomessage.style.display = "none";
    }
    console.log(email.value.length)
    if(email.value.length == ''){
        let emailmessage = document.querySelector("#hemail");
        emailmessage.style.display = "block";
        emailmessage.innerText = "Fill the email column";
    } else {
        let emailmessage = document.querySelector("#hemail");
        emailmessage.style.display = "none";
    }
});
