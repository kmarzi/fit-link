$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the modal

  const profile = $("#myProfile");
  profile.on("click", function() {
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
    });
  });
});

$("#edit").on("click", function() {
  console.log("hello1");
});
$("#delete").on("click", function() {
  console.log("hello2");
});
