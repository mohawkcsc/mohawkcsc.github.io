// $.ajax({url: docxDirectory}).then(function(){

// });
var container = $("#container-fluid");
$.getJSON("assets/json/meetingMinutes.json", function (json) {
  for (let i = 0; i < json.length; i++) {
    console.log(json[i]);
    $(".container-fluid").append(
      `<div class="card text-center">
        <div class="card-header">
        </div>
        <div class="card-body">
          <h5 class="card-title">${json[i].date}</h5>
          <p>Meeting minutes from ${json[i].date}</p>
          <a href="${json[i].path}" download="${json[i].filename}"class="btn btn-primary">Download</a>
        </div>
        <div class="card-footer text-muted">
          </div>
        </div>`
    );
    console.log(json[i].path);
  }
});
