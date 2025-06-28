function signUp() {
  const user = document.getElementById("signup-username").value;
  const pass = document.getElementById("signup-password").value;

  if (user && pass) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    alert("✅ Account created! Logging you in...");
    window.location.href = "movies.html";
  } else {
    alert("❌ Please fill all fields.");
  }
}

function signIn() {
  const user = document.getElementById("signin-username").value;
  const pass = document.getElementById("signin-password").value;
  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (user === storedUser && pass === storedPass) {
    alert("✅ Welcome back!");
    window.location.href = "movies.html";
  } else {
    alert("❌ Incorrect credentials.");
  }
}

function logout() {
  alert("👋 Logged out!");
  window.location.href = "index.html";
}
