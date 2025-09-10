document.addEventListener("DOMContentLoaded", () => {
  const usernameEl = document.querySelector("#displayUsername");
  const emailEl = document.querySelector("#displayEmail");

  if (usernameEl && emailEl) { // ✅ only if elements exist
    usernameEl.textContent = localStorage.getItem("username") || "Guest";
    emailEl.textContent = localStorage.getItem("email") || "Not set";
  }
});
