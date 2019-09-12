let orm = require("../config/orm");


//   $(".devour").on("submit", event => {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     // Get the ID by finding an element with a "name" attribute equal to the string "id"
//     let id = $("[name=id]").val().trim();

//     var updatedPlan = {
//       plan: $("#updateburger [name=plan]").val().trim()
//     };

//     // Send the PUT request.
//     $.ajax("/api/plans/" + id, {
//       type: "PUT",
//       data: updatedPlan
//     }).then(
//       function() {
//         console.log("updated id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });