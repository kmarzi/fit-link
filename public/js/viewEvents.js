var linkUp;
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  const activityCategory = $(".activity");

  activityCategory.on("click", function() {
    $("#exampleModalLabel").text(event.currentTarget.value);
    console.log(event.currentTarget.id);
    $("#ol").empty();
    $.get("/api/linkup/category/" + event.currentTarget.id, function(data) {
      console.log("LinkUps---->", data);
      // linkUp = data;
      displayLinkUp(data);
    });
  });

  function displayLinkUp(data) {
    console.log("for loop ====>",data);
    for (let i = 0; i < data.length; i++) {
      const displayEach = `${data[i].name} 
      Where: ${data[i].street} ${data[i].city}, ${data[i].state} ${data[i].zipCode}`;
      console.log(displayEach);
      $("#ol").append("<li>" + displayEach + "</li");
    }
  }
});
