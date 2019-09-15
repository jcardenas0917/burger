let orm = require("../config/orm.js");
let burger = {
  // Display all burgers in the db.
  all: function (cb) {
    orm.selectAll("burgers",res => {
      cb(res);
    });
  },
  // Add a new burger to the db.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, res => {
      cb(res);
    });
  },
  // Change the devoured status to true.
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, res => {
      cb(res);
    });
  },
  //Delete Devoured Burger
  delete: function (condition, cb) {
    orm.delete("burgers", condition, res => {
      cb(res);
    });
  }
};

// Export at the end of the burger.js file.
module.exports = burger;