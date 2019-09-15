
$("#new_burger").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
        burger_name: $("#burger_name").val(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Added new burger");
        // Reload the page to get the updated burger list.
        location.reload();
    });
});

$(".devour").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function() {
        console.log("Burger devoured");
        location.reload();
    });
});

// $(".trashburger").on("click", function(event) {
//     event.preventDefault();

//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax({
//         type: "DELETE",
//         url: "/api/burgers/" + id
//     }).then(location.reload());
// });
    // $("#devour").on("click", event => {
    //     event.preventDefault();
    //     let id = $(this).data("id");
    //     let newDevour = $(this).data("newdevour");

    //     var newDevourState = {
    //         devour: newDevour
    //     };

    //     // Send the PUT request.
    //     $.ajax("/api/burgers/" + id, {
    //         type: "PUT",
    //         data: newDevourState
    //     }).then(
    //         function () {
    //             location.reload();
    //         }
    //     );
    // });

    // $("#createburger").on("submit", event => {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     var newBurger = {
    //         burger_name: $("#burger_name").val().trim(),
    //     };

    //     // Send the POST request.
    //     $.ajax("/api/burgers", {
    //         type: "POST",
    //         data: newBurger
    //     }).then(
    //         function () {
    //             console.log("created new burger");
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

