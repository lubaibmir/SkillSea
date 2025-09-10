document.addEventListener("DOMContentLoaded", () => {
  const buyImg = document.querySelector(".summary-image");
  const paymentBtn = document.querySelector(".confirmPayment");
  const courseOn = sessionStorage.getItem("courseOn");

  console.log("courseOn in buy page:", courseOn); // debug

  if (buyImg && courseOn) {
    if (courseOn === "1") buyImg.src = "WebDev.jpg";
    if (courseOn === "2") buyImg.src = "ds.jpg";
    if (courseOn === "3") buyImg.src = "digiM.jpg";
  }

  if (paymentBtn) {
    paymentBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});
