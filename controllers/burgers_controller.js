let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/",(req, res) => {
  burger.all(data => {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
    
    res.json({ id: result.insertId });
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  burger.update(
    {
        devoured: req.body.devoured
    },
    condition, (result) => {
        res.redirect("/");
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// router.delete("/:id", (req, res) => {
//     let condition = "id = " + req.params.id;
//     burger.delete(condition, function() {
//       res.redirect("/");
//     });
//   });

// Export routes for server.js to use.
module.exports = router;
