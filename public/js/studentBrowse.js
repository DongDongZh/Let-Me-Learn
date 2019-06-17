$(document).ready(function() {
  //ajax for gmail profile pictues
  var queryURL = "/api/teachers";
  // var name = $("<div>").addClass("userName");
  // var thumb = $("<img>").addClass("userImg");
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    for (var i = 0; i < response.length; i++) {
      // thumb.attr("src", response[i].image);
      // thumb.css("width", "10%");
      // thumb.css("height", "10%");
      // $(".userImg").append(thumb);
      // name.html(response[i].name);
      // console.log(name);
    }
  });
  //ajax call for profile information
  // console.log(thumb);

  $.ajax({
    url: "/api/tasks",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      // creating cards for information
      var cardDiv = $("<div>").addClass("card");
      var cardHeader = $("<div>").addClass("card-header");
      var cardBody = $("<div>").addClass("card-body");
      var cardTitle = $("<h5>").addClass("card-title");
      var cardText = $("<div>").addClass("card-text");
      var cardUserName = $("<div>").addClass("card-cardUserName");
      var cardEmail = $("<a>").addClass("btn btn-primary");
      // var cardImg = $("<div>").addClass("card-img");
      // var cardUserName = $("<div>").addClass("card-img");
      
      //assigning values to var's

      cardHeader.text(response[i].title);
      cardTitle.text(response[i].category);
      cardText.text(response[i].description);
      cardUserName.text("posted by " + response[i].name);
      cardEmail.text("Teach Me!");
      cardEmail.attr("href", "mailto:" + response[i].email + "?subject=Let me Learn");
      // cardImg.html(thumb);
      // cardUserName.text(name);

      // putting all card info together
      // cardImg.append(cardBody);
      cardBody.append([cardTitle, cardText, cardEmail, cardUserName]);
      cardDiv.append([cardHeader, cardBody]);
      $("#pageContainer").prepend(cardDiv);
    }
  });
});
