$(document).ready(() => {
  const linkUpForm = $("form.LinkUp");
  const categoryInput = $("#category");
  const linkName = $("#LinkName");
  const addressInput = $("#Addy");
  const cityInput = $("#inputCity");
  const stateInput = $("#stateInput");
  const zipCodeInput = $("#Zip");
  const dateInput = $("#Date");
  const startTime = $("#Start");
  const linkUpDuration = $("#End");
  const linkUpDescription = $("#description");

  linkUpForm.on("submit", event => {
    event.preventDefault();
    const linkUpData = {
      name: linkName.val().trim(),
      linkUpDesc: linkUpDescription.val().trim(),
      street: addressInput.val().trim(),
      city: cityInput.val(),
      state: stateInput.val(),
      zipCode: zipCodeInput.val().trim(),
      linkUpDate: dateInput.val(),
      startTime: startTime.val(),
      duration: linkUpDuration.val(),
      category: categoryInput.val()
    };
    addLinkUp(linkUpData);
  });

  function addLinkUp(data) {
    console.log(data);
    $.post("/api/linkup", data)
      .then(() => {
        window.location.replace("/viewEvents");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(error => {
        console.log(error);
      });
  }

  //   function handleErr(err) {
  //     // $("#alert .msg").text(JSON.stringify(err.responseJSON))
  //     console.log(err.response);
  //     $("#alert").fadeIn(500);
  //   }
});
