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

function login() {}
