// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoured").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    console.log(id);
    const newDevouredState = {
      devoured: 1,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#submit").on("click", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const newBurger = {
      name: $("#burger_name").val().trim(),
      devoured: 0,
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
