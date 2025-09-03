elem=document.querySelector(".signup-button")
elem.onclick=function() {
     window.open("signup.html", "_blank");   
};

elem=document.querySelector(".login-button")
elem.onclick=function() {
     window.open("login.html", "_blank");   
};


function updateUserAction() {
  const userActions = document.querySelector(".user-actions");
  if (!userActions) return;

  if (localStorage.getItem("loggedIn") === "true") {
    userActions.innerHTML = `<button class="account">My Account</button>`;
  }
}
// Run on every index.html load
updateUserAction();


useractions=document.querySelector(".user-actions")
submitSignup=document.querySelector(".submit-signup");
if(submitSignup){
    submitSignup.addEventListener('click',(event) => {
        event.preventDefault();
        const username=document.getElementById("username").value;
        const pass = document.getElementById("pass").value;
        const confirmPassword = document.getElementById("password").value;
        if(username && pass && confirmPassword && pass === confirmPassword){
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", username);
            //  Redirect back to home
            window.location.href = "index.html";
        }else{
            alert("Please enter the credentials !!")
        }
    })
}
