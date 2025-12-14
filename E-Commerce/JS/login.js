var x = document.querySelector(".link");
var secForget = document.querySelector("#forget");
var secLogin = document.querySelector("#login")
x.onclick=function(){
    secForget.style.display = "block";
    secLogin.style.display = "none";
}

var userEmail = document.querySelector('#UserEmail');
var userPass = document.querySelector('#UserPass');
var btnLogin = document.querySelector('.btnL');
var btnReset = document.querySelector('.btnR');

btnLogin.addEventListener('click', function(e){
    signIn();
    e.preventDefault();
})

async function signIn() {
    var userInfo = {
        email: userEmail.value,
        password: userPass.value,
    }
    console.log(userInfo);

    var response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
            method: "POST",
            headers: {'Content-Type':'Application/json'},
            body: JSON.stringify(userInfo)
        })

    var finalResponse = await response.json();
    if (finalResponse.message == "success") {
        window.location.href = '../index.html';
    }
    console.log(finalResponse);
}
//////////////////
btnReset.addEventListener('click', function(e){
    resetPass();
    e.preventDefault();
})

async function resetPass () {
    var userInfo = {
        email: userEmail.value,
    }
    console.log(userInfo);

    var response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, {
        method: "POST",
        headers: {'Content-Type':'Application/json'},
        body: JSON.stringify(userInfo)
    })

    var finalResponse = await response.json();
    if (finalResponse.message == "success") {
        window.location.href = '../login.html'
    }
}