$(document).ready(() => {
  // const timeConvert = moment().format("LT");

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  const activityCategory = $(".activity");
  activityCategory.on("click", function() {
    $("#linkUpModal").text(event.currentTarget.value);
    console.log(event.currentTarget.id);
    $("#ol").empty();
    $.get("/api/linkup/category/" + event.currentTarget.id, function(data) {
      console.log("LinkUps---->", data);
      displayLinkUp(data);
    });
  });
  function displayLinkUp(data) {
    console.log("for loop ====>", data);
    for (let i = 0; i < data.length; i++) {
      const displayEach = `
      <p id="evite" class="card-title" style="font-size: 20px">
        <b>${data[i].name}</b>
        <button type="button" class="btn btn-primary ml-5">
                        Interested
                        <span class="badge badge-light ml-2">${data[i].interestCount}</span>
                      </button></p>
                    <p><b>Where: </b>${data[i].street} ${data[i].city}, ${data[i].state} ${data[i].zipCode}
                    <p><b>When: </b>${data[i].linkUpDate} at ${data[i].startTime}</p>
                    <p class="card-text"><b>What: </b>${data[i].linkUpDesc}.
                    </p>
                    <hr>
                    `;
      console.log(displayEach);
      $("#ol").append(displayEach);
    }
  }
});
/*{ <p id="evite" class="card-title" style="font-size: 20px"><b>Glow-ga in the Park</b><button type="button"
                    class="btn btn-primary ml-5">
                    Interested<span class="badge badge-light ml-2">4</span>
                  </button></p>
                <p><b>Where: </b>Freedom Park: 1908 East Blvd. Charlotte, NC 28203
                <p><b>When: </b>Thursday, September 24th, 2020 at 7pm </p>
                <p class="card-text"><b>What: </b>Glow in the dark yoga in the park.
                </p> }*/
