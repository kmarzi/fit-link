$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const userName = $("#userName-input");
  const emailInput = $("#email-input");
  const passwordInput = $("#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      userName: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.userName || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function userData.userName, 
    signUpUser(userData.email, userData.password);
    userName("")
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      userName: userName,
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    // $("#alert .msg").text(JSON.stringify(err.responseJSON))
    console.log(err.respsonse);
    $("#alert").fadeIn(500);
  }
});
