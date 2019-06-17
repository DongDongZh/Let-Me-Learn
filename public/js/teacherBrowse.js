$(document).ready(function () {
  //ajax for gmail profile pictues
  var queryURL = "/api/teachers";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    for (var i = 0; i < response.length; i++) {
      //Thumbnail for page/ not quite working
      console.log(response[i].name);
      // var thumb = $("<img>").addClass("rounded img-thumbnail float-right");
      // thumb.attr("src", response[i].image);
      // thumb.css("width", "30%");
      // thumb.css("height", "30%");
      // $(".rounded").append(thumb);

      var cardDiv = $("<div>").addClass("card");
      var cardHeader = $("<div>").addClass("card-header");
      var cardBody = $("<div>").addClass("card-body");
      var cardText = $("<img>").addClass("card-text");
      var cardEmail = $("<h5>").addClass("card-email");

      cardHeader.text(response[i].name);
      cardEmail.text(response[i].email);
      cardText.attr("src", response[i].image);
      cardText.css("width", "30%");
      cardText.css("height", "30%");

      cardBody.append([cardText, cardEmail]);
      cardDiv.append([cardHeader, cardBody]);
      $("#pageContainer").prepend(cardDiv);
    
    }

    //on click event: when clicking on the email button, send off the email
    // $(".card-email").on("click",function(event){
    //   event.preventDefault(); 
    // }); 
  });
});