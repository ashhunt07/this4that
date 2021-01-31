const express = require("express");
const router = require('express').Router();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// router.route("/").get((req,res) => {
//   res.json({test:"test"})
// });

app.use(router);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/barteringapp",
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  });

//Open Socket connection via Server
io.on("connection", socket => {
  socket.emit("your id", socket.id);
  socket.on("send message", body => {
      io.emit("message", body)
  })
})

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
