$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
var activityCategory = $(".activity")

 activityCategory.on("click", function() {
    $("#exampleModalLabel").text(event.currentTarget.value);
    console.log(event.currentTarget.id);
    $.get("/api/linkup/category/" + event.currentTarget.id, function(data) {
      console.log("LinkUps---->", data);
      thisLinkUp = data;
    });
  });
});
