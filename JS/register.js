var userName = document.querySelector('#UserName');
var userEmail = document.querySelector('#UserEmail');
var userPass = document.querySelector('#UserPass');
var userRePass = document.querySelector('#UserRePass');
var userPhone = document.querySelector('#UserPhone');
var btnRegister = document.querySelector('.bttn');

btnRegister.addEventListener('click', function(e){
    signUp();
    e.preventDefault();
})

async function signUp() {
    var userInfo = {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
        rePassword: userRePass.value,
        phone: userPhone.value
    }
    console.log(userInfo);

    var response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
            method: "POST",
            headers: {'Content-Type':'Application/json'},
            body: JSON.stringify(userInfo)
        })
    if (response.status === 409) {
        alert("Email already exists. Please use a different email.");
        return;
    }

    var finalResponse = await response.json();
    if (finalResponse.message == "success") {
        window.location.href = '../login.html';
    }
    console.log(finalResponse);
}