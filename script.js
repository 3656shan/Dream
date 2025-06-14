function checkPassword() {
  const input = document.getElementById("password").value;
  const correct = "shansam111";
  if (input === correct) {
    window.location.href = "home.html";
  } else {
    document.getElementById("error-message").classList.remove("hidden");
  }
}
