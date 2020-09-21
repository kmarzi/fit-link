$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the modal

  const profile = $("#myProfile");
  profile.on("click", function() {
    $.get("/api/user_data").then(data => {
      $(".member-name").text(data.email);
      console.log(data.id);
      var userID = data.id;
      $.get("/api/linkup/UserId/" + userID, function(res) {
        // $(".pro").empty();
        console.log("UserLinkUps---->", res);
        displayUserLinkUp(res);
      });
    });
  });
  function displayUserLinkUp(data) {
    for (let i = 0; i < data.length; i++) {
      // console.log(convertTime(data[i].startTime));
      const eventTime = convertTime(data[i].startTime);
      const displayEach = `
      <p id="evite" class="card-title" style="font-size: 20px">
        <b>${data[i].name}</b></p>
                    <p><b>Where: </b>${data[i].street} ${data[i].city}, ${data[i].state} ${data[i].zipCode}</p>
                    <p><b>When: </b>${data[i].linkUpDate} at ${eventTime}</p>
                    <p class="card-text"><b>What: </b>${data[i].linkUpDesc}.
                    </p>
                    <hr>
                    <button type="button" class="btn btn-primary btn-xsm">Edit</button>
                    <button type="button" class="btn btn-danger btn-xsm">Delete</button>
                 </p>
                    `;
      console.log(displayEach);
      $(".pro").append(displayEach);
    }
  }
  function convertTime(x) {
    let time = x; // your input
    time = time.split(":"); // convert to array
    // fetch
    const hours = Number(time[0]);
    const minutes = Number(time[1]);
    const seconds = Number(time[2]);
    // calculate
    let timeValue;
    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours === 0) {
      timeValue = "12";
    }
    timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
    timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM
    // show
    // console.log(timeValue);
    return timeValue;
  }
});
