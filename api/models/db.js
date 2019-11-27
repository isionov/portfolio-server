const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    `mongodb+srv://${process.env.user}:${encodeURIComponent(
      process.env.password
    )}@portfolioapi-y6oom.mongodb.net/test?retryWrites=true`,
    {
      useNewUrlParser: true
    }
  )
  .catch(e => {
    console.error(e);
    throw e;
  });

mongoose.connection.on("connected", function() {
  console.log(`Mongoose default connection oppen on MLAB`);
});

mongoose.connection.on("error", function(err) {
  console.error("Mongoose default connection error " + err);
});

mongoose.connection.on("disconnect", function() {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});

require("./skill-cards");
require("./skills");
require("./works");
require("./revs");
