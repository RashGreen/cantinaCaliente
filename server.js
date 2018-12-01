var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations DATA
var reservations = [
    {
        customerName: "Bob",
        customerNumber: "123-456-7890",
        customerEmail: "bobsmith@yahoo.com",
        cusomterID: "bsmith"
    }
];

// Routes
// ============================================================
app.get("/api/tables", function(req, res) {
    res.json(reservations);
  });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});