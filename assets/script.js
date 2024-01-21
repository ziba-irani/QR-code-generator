let userText = document.getElementById("userText");
let qrImg = document.getElementById("qrImg");
let showUserText = document.getElementById("showUserText");

function showQR() {
  if (userText.value.length > 0) {
    qrImg.style.display = "block";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userText.value}`;
    showUserText.style.display = "block";
    showUserText.innerHTML = userText.value;
    userText.value = "";
  } else {
    userText.classList.add("error");
    userText.classList.add("red-border");
    setTimeout(() => {
      userText.classList.remove("error");
    }, 1000);
  }
}
function showNewQR() {
  qrImg.style.display = "none";
  showUserText.style.display = "none";
  userText.value = "";
}
