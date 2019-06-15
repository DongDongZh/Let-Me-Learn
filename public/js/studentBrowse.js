$(document).ready(function () {
  var queryURL = "/api/students";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    for (var i = 0; i < response.length; i++) {

      console.log(response[i].name);
      // var thumb = $("<img>").addClass("rounded img-thumbnail float-right");
      // thumb.attr("src", response[i].image);
      // thumb.css("width", "30%");
      // thumb.css("height", "30%");
      // $(".rounded").append(thumb);
    }
  });
  $.ajax({
    url: "/api/tasks",
    method: "GET"
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {

      var cardDiv = $("<div>").addClass("card");
      var cardHeader = $("<div>").addClass("card-header");
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<h5>").addClass("card-title");
      var cardText = $("<div>").addClass("card-text");

      cardHeader.text(response[i].name);
      cardTitle.text(response[i].category);
      cardText.text(response[i].description);

      cardBody.append([cardTitle, cardText]);
      cardDiv.append([cardHeader, cardBody]);
      $("#pageContainer").prepend(cardDiv);
    
    }
  });
});
