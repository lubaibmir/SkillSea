const courseInfo = document.querySelector(".course-card");
if (courseInfo) {
  courseInfo.addEventListener("click", function () {
    window.location.href = "courseInfo.html";
  });
}

const logIn = document.querySelector(".login-button");
if (logIn) {
  logIn.addEventListener("click", () => {
    
    window.location.href = "login.html";
  });
}

const signUp = document.querySelector(".signup-button");
if (signUp) {
  signUp.addEventListener("click", () => {
    window.location.href = "signup.html";
  });
}

const logInReturn = document.querySelector(".submit-signup");
if (logInReturn) {
  logInReturn.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLoggedIn","true");
    window.location.href = "index.html";
  });
}

document.addEventListener("DOMContentLoaded",()=>{
    const loginBtn= document.querySelector(".login-button");
    const signupBtn= document.querySelector(".signup-button");
    if(sessionStorage.getItem("isLoggedIn")==="true"){
        loginBtn.innerHTML = "<img src='shopping-cart.png' width='30px'>";
        signupBtn.innerHTML = "<img src='user.png' width='30px'>";

        loginBtn.addEventListener("click",()=>{
            window.location.href="cart.html";
        })
        
        signupBtn.addEventListener("click",()=>{
            window.location.href="myAcc.html";
        })
    }
});
//courseinfo

const cartBtn = document.querySelector(".cart-btn");

cartBtn.addEventListener("click", () => {
  if (cartBtn.classList.contains("ctaBtnAfter")) {
    cartBtn.innerHTML = "Add to cart";
    cartBtn.classList.remove("ctaBtnAfter");
  } else {
    cartBtn.innerHTML = "Added to cart";
    cartBtn.classList.add("ctaBtnAfter");
  }
});


