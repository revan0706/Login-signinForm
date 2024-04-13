if (Boolean(localStorage.getItem("usersData")) == false) {
  localStorage.setItem("usersData", "*");
}
// if (signInUserEmail.length > 0){
//   document.getElementById("signInUserEmail").style.backgroundColor = "transparent"
// }

// if (signInUserPassword.length > 0){
//   document.getElementById("signInUserPassword").style.backgroundColor = "transparent"
// }
function signIn() {
  let signInUserEmail = document.getElementById("signInUserEmail").value;
  let signInUserPassword = document.getElementById("signInUserPassword").value;
  if (signInUserPassword.length > 0 && signInUserEmail.length > 0) {
    localStorage.setItem(
      "usersData",
      Array(
        String(Array(localStorage.getItem("usersData"))).replace(
          "*",
          `${signInUserEmail} : ${signInUserPassword},*`
        )
      )
    );
  } else if (signInUserEmail.length == 0) {
    document.getElementById("signInUserEmail").style.backgroundColor = "red";
  } else if (signInUserPassword.length == 0) {
    document.getElementById("signInUserPassword").style.backgroundColor = "red";
  }
}

function login() {
  let logUserEmail = document.getElementById("logUserEmail").value;
  let logUserPassword = document.getElementById("logUserPassword").value;
  console.log(document.getElementById("logUserEmail").value);
  if (logUserEmail.length > 0 && logUserPassword.length > 0) {
    if (localStorage.getItem("usersData").search(logUserEmail) >= 0) {
      if (localStorage.getItem("usersData").search(logUserPassword) >= 0) {
        alert("Login Succesful!");
      } else {
        alert("Login Failed!");
      }
    } else {
      alert("Login Failed!");
    }
  } else if (logUserEmail.length == 0) {
    document.getElementById("logUserEmail").style.backgroundColor = "red";
  } else if (logUserPassword == 0) {
    document.getElementById("logUserPassword").style.backgroundColor = "red";
  }
}
