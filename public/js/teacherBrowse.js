$(document).ready(function() {
  var queryURL = "/api/teachers";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var key;

    for (key in response) {
      console.log(response[key].name);

      var cardDiv = $("<div>").addClass("card");
      var cardHeader = $("<div>").addClass("card-header");
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<div>").addClass("card-title");
      var cardEmail = $("<div>").addClass("card-email");

      cardHeader.text(response[key].name);
      cardTitle.text(response[key].description);
      cardEmail.text(response[key].email);

      cardBody.append([cardTitle,cardEmail]);
      cardDiv.append([cardHeader,cardBody]);
      $("#pageContainer").append(cardDiv);
    }
  });
});