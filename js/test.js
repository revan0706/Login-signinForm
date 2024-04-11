if (Boolean(localStorage.getItem("usersData")) == false) {
  localStorage.setItem("usersData", "*");
}
function signIn() {
  let signInUserEmail = document.getElementById("signInUserEmail").value;
  let signInUserPassword = document.getElementById("signInUserPassword").value;
  localStorage.setItem(
    "usersData",
    Array(
      String(Array(localStorage.getItem("usersData"))).replace(
        "*",
        `${signInUserEmail} : ${signInUserPassword},*`
      )
    )
  );
}

function login() {
  let logUserEmail = document.getElementById("logUserEmail").value;
  let logUserPassword = document.getElementById("logUserPassword").value;
  if (localStorage.getItem("usersData").search(logUserEmail) >= 0) {
    if (localStorage.getItem("usersData").search(logUserPassword) >= 0) {
      alert("Login Succesful!");
    } else {
      alert("Login Failed!");
    }
  } else {
    alert("Login Failed!");
  }
}
