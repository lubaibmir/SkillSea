const courseInfo = document.querySelector(".one");
if (courseInfo) {
  courseInfo.addEventListener("click", function () {
    sessionStorage.setItem('courseOn', '1');
    window.location.href = "courseInfo.html";
  });
}

const courseInfo2 = document.querySelector(".two");
if (courseInfo2) {
  courseInfo2.addEventListener("click", function () {
    sessionStorage.setItem('courseOn', '2');
    window.location.href = "datasc.html";
  });
}

const courseInfo3 = document.querySelector(".three");
if (courseInfo3) {
  courseInfo3.addEventListener("click", function () {
    sessionStorage.setItem('courseOn', '3');
    window.location.href = "marketing.html";
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
       
        loginBtn.innerHTML = "<img src='shopping-cart.png'>";
        loginBtn.classList.add("cart-icon-btn");

        signupBtn.innerHTML = "<img src='user.png'>";
        signupBtn.classList.add("cart-icon-btn");


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

// courseInfo.js
document.addEventListener('DOMContentLoaded', () => {
  const buyBtn = document.querySelector('.buyBtn');
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      window.location.href = 'buy.html';
    });
  }
});

//cart
window.onload = function () {
    const keepShoppingBtn = document.getElementById("keepShopping");

    if (keepShoppingBtn) {
        keepShoppingBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
};




