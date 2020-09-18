const 

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

$(document).ready(function () {
  $(".activity").on("click", function () {
    $("#exampleModalLabel").text(currentTarget.value);
    console.log(currentTarget.value);
  });
});