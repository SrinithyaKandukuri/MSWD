const mongoose = require("mongoose");

var connectDb = mongoose.connect(
  "mongodb+srv://2100030069:czrgxuE9QnazoewH@cluster0.jiyuhif.mongodb.net/automobile-system?retryWrites=true&w=majority"
);

module.exports = connectDb;
