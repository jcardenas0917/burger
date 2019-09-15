
let express = require("express");
let burger = require("../models/burger.js");

let router = express.Router();

router.get("/", (req, res) => {
    burger.all(data => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// Add new burger to the db.
router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
        res.json({ id: result.insertId });
    });
});
// Set burger devoured status to true.
router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({ devoured: req.body.devoured }, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
    //Delete devoured burger from DB
    router.delete("/api/burgers/:id", (req, res) => {
        var condition = "id = " + req.params.id;

        cat.delete(condition, result => {
            if (result.affectedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});

module.exports = router;