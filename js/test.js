let i = 0;
function signIn() {
  let signInUserName = document.getElementById("signInUserName").value;
  let signInUserSurname = document.getElementById("signInUserSurname").value;
  let signInUserEmail = document.getElementById("signInUserEmail").value;
  let signInUserPassword = document.getElementById("signInUserPassword").value;
  let user = {
    key: i,
    Name: signInUserName,
    Surname: signInUserSurname,
    Email: signInUserEmail,
    Password: signInUserPassword,
  };
  localStorage.setItem(i, JSON.stringify(user));
  i++;
}
function login() {
  let loginUserEmail = document.getElementById("loginUserEmail").value;
  let loginUserPassword = document.getElementById("loginUserPassword").value;
  let l;
  for (i = 0; i < localStorage.length; i++) {
    let userEmail = Object.entries(JSON.parse(localStorage.getItem(i)))[3][1];
    let userPassword = Object.entries(
      JSON.parse(localStorage.getItem(i))
    )[4][1];
    console.log(i);
    if (
      userEmail == loginUserEmail &&
      userPassword == loginUserPassword &&
      i <= localStorage.length
    ) {
      l = true;
    }
  }
  if (l == true) {
    alert("login succesful");
  } else {
    alert("login failed");
  }
}
