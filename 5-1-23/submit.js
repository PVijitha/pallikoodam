function handleSubmit(e){
    e.preventDefault();
    console.log(e);
    // const email = document.forms['login']['email'].value;
    // const password = document.forms['login']['password'].value;
    const email = document.forms.login.email;
    const password = document.forms.login.password;
    const age = document.forms.login.age;
    console.log(email, "\n", password);
    const emailvalue = email.value;
    const passwordvalue = password.value;
    const agevalue = age.value;
    const passwordErrorDisplay = password.nextElementSibling;
    if(passwordvalue.length < 6){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.classList.innerHTML += `<li>
         password must be at least 6 character</li>`;
        
    }
    if(passwordvalue.includes('')){
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML +='<li>Password must do not contain space</li>';
    }
    if(emailvalue == '' ){
        email.style.border = '1px solid red';
        email.nextElementSibling.classList.remove('d-none');
    }
    const ageErrorDisplay = age.nextElementSibling;
    if(agevalue < 18){
        age.style.border = '1px solid red';
        ageErrorDisplay.classList.remove('d-none');
        ageErrorDisplay.classList.innerHTML += `<li>
         You must at least want 18 years</li>`;

    }
    console.log(password);

   
}