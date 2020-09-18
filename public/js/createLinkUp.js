const linkUpForm = $("form.LinkUp");
const categoryInput = $("#category");
const linkName = $("#LinkName");
const addressInput = $("#Addy");
const cityInput = $("#City");
const stateInput = $("#State");
const zipCodeInput = $("#Zip");
const dateInput = $("#Date");
const startTime = $("#Start");
const endTime = $("End");

linkUpForm.on("submit", event => {
  event.preventDefault();
  const linkUpData = {
    name: linkName.val().trim(),
    street: addressInput.val().trim(),
    city: cityInput.val().trim(),
    state: stateInput.val().trim(),
    zipCode: zipCodeInput.val().trim(),
    linkUpDate: dateInput.val(),
    startTime: startTime.val(),
    endTime: endTime.val(),
    category: categoryInput.val()
  };
});
