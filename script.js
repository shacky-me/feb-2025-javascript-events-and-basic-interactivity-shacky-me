// Form Validation
document.getElementById("myForm").addEventListener("submit", function (event) {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  if (!email.includes("@")) {
    alert("Invalid email!");
    event.preventDefault();
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    event.preventDefault();
  }
});

// Modal Functionality
document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Slider Update
document.getElementById("slider").addEventListener("input", function () {
  document.getElementById("value").textContent = this.value;
});
