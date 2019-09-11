let express = require("express");
let burger = require("../burger.js");

module.exports = app => {

    // Sets the get for the api/friends route
    app.get("/", (req, res) => res.render("index",  ));
      
}