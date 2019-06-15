// When the studentSubmit button is clicked, send student post data to server.
$(function () {
  $("#studentSubmit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // Get references to page elements
    var newTask = {
      name: $("#postTitle").val().trim(),
      category: $("#categorySelect").val().trim(),
      description: $("#aboutPost").val().trim()
    };
    // Send the POST request.
    if (newTask.name === "" ||
      newTask.category === "" ||
      newTask.description === "") {
      alert("Please Enter All Fields");
    }
    else {
      $.ajax("/api/tasks", {
        type: "POST",
        data: newTask,      
      }).then(function (result) {
        console.log("Created new task");
        console.log(result);
        // Reload the page to get the updated list
        location.reload();
        window.location.href = "/students"; 
      });
    }
  });
});
