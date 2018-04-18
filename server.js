var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var burger_app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
burger_app.use(express.static("public"));

// parse application/x-www-form-urlencoded
burger_app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
burger_app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

burger_app.engine("handlebars", exphbs({ defaultLayout: "main" }));
burger_app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var apiRoutes = require("./controllers/burgers_controller.js");
var htmlRoutes = require("./routes/html-routes.js"); 

burger_app.use(apiRoutes);
burger_app.use(htmlRoutes);

// // Start our server so that it can begin listening to client requests.
// burger_app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  burger_app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});