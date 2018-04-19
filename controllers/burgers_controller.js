var express = require("express");

var router = express.Router();

// Requiring our models
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

// Handles adding burger to DB and the screen
router.post("/api/burger/:burgerName?", function (req, res) {
    console.log("in burgername handler");
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.BetterBurger.create({
        burger_name: req.params.burgerName,
        devoured_bool: false,
    }).then(function (dbBurger) {
        // console.log("we got a response", dbBurger);

        // We have access to the new todo as an argument inside of the callback function
        res.json(JSON.stringify(dbBurger));

    })
        .catch(function (err) {
            console.log("we got an error", err);
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", 
            // which could crash our node app
            res.status(500).send(err);

        });
});


//called to upate the status of a burger to eaten aka devoured_bool to 'true'
router.put("/api/burger/:id", function (req, res) {
    console.log("in update of burger::" + req.params.id);
    console.log("EATEN  ::" + req.body.eaten);
    console.log("burger name  ::" + req.body.burger_name);
    console.log("diner name  ::" + req.body.diner);

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.BetterBurger.update({
        devoured_bool: req.body.eaten,
    },
        {
            where: {
                id: req.params.id
            }
        }).then(function (dbBurgerResponse) {
            console.log("in .then of update");
            res.json(dbBurgerResponse);
        })
        .catch(function (err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        });
});

// Export routes for server.js to use.
module.exports = router;
