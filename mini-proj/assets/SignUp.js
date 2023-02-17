//register & logins

var x = document.getElementById("login");
var y = document.getElementById("registerForm");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

document.querySelector('#registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Registration successful!');
    document.querySelector('#registerForm').reset();
  });


