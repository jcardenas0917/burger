let connection = require("./connection.js");

let queries = {
    selectAll: function () { 
        app.get("/", function(req, res) {
            connection.query("SELECT * FROM burgers;", function(err, data) {
              if (err) {
                return res.status(500).end();
              }
          
              res.render("index", { burgers: data });
            });
          });
    },
    insertOne: function () {app.post("/", function(req, res) {
        connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
          if (err) {
            return res.status(500).end();
          }
      
          // Send back the ID of the new plan
          res.json({ id: result.insertId });
          console.log({ id: result.insertId });
        });
      }); },
    updateOne: function () { app.put("/:id", function(req, res) {
        connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [req.body.burger, req.params.id], function(err, result) {
          if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
          }
          else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
      
        });
      });
      },
}

module.exports = queries;