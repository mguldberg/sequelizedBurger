// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

var express = require("express");

var router = express.Router();

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
// Each of the below routes just handles the HTML page that the user gets sent to.
// - in this case the route loads the handlebars files.  The call below will run the code in burger.handlebars
// 
router.get("/", function (req, res) {
    console.log("inside g / - find all");
    // findAll returns all entries for a table when used with no options
    db.BetterBurger.findAll({}).then(function (dbBurger) {

        var handlebarsObject = {
            burgers_data: dbBurger,
        };
        console.log("in route get / ");
    
        res.render("burger", handlebarsObject);
    });
});

// Export routes for server.js to use.
module.exports = router;
