const signUpBtn = $("#signup");
const loginBtn = $("#login");

signUpBtn.on("click", () => {
  window.location = "/signup";
});

loginBtn.on("click", () => {
  window.location = "/login";
});
