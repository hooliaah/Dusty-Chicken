// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// =============================================================
console.log(Date.now());
var resList = [
  {
     name: 'Julie Groth',
     email: 'julie@ucla.com',
     partySize: 5,
     phone: '323-111-2222',
     time: '039239834'
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "home.html"));
});

// Get all characters
app.get("/viewres", function(req, res) {
   res.sendFile(path.join(__dirname, "viewres.html"));
});


app.get("/addres", function(req, res) {
   res.sendFile(path.join(__dirname, "addres.html"));
});

app.get("/api", function(req, res) {
      return res.json(resList);
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
