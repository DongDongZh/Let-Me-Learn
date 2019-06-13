// ajax post to db / front in js

$("#teacherPost").on("click", function(event) {
  event.preventDefault();

  var newTeacher = {
    name: $("#postTitleTeacherName")
      .val()
      .trim(),
    email: $("#postTeacherEmail")
      .val()
      .trim(),
    category: $("#categorySelectTeacher").val(),
    description: $("#aboutPostTeacher")
      .val()
      .trim()
  };
  console.log(newTeacher);

  if (
    newTeacher.name === "" ||
    newTeacher.email === "" ||
    newTeacher.description === ""
  ) {
    alert("Please Enter All Feilds");
  } else {
    // Send the POST request.
    $.ajax("/api/teachers", {
      type: "POST",
      data: newTeacher
    }).then(function() {
      console.log("created new teacher");
      // Reload the page to get the updated list
      location.reload();
    });
  }
});
