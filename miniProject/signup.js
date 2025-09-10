document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector("#signupForm");

  console.log("Signup page loaded. Form:", signupForm); // ✅ debug

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.querySelector("#username").value.trim();
      const email = document.querySelector("#email").value.trim();

      console.log("Saving to localStorage:", username, email); // ✅ debug

      localStorage.setItem("username", username);
      localStorage.setItem("email", email);

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
    });
  }
});
