const mongoose = require("mongoose");
const config = require("../../config/config");

mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
    useNewUrlParser: true
  })
  .catch((e) => {
    console.error(e);
    throw e;
  });

mongoose.connection.on("connected", function() {
  console.log(
    `Mongoose default connection oppen mongodb://${config.db.host}:${
      config.db.port
    }/${config.db.name}`
  );
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

require("./slill-cards");
require("./skills");
require("./works");

// require("./works");

// const Model = mongoose.model("SkillCards");

// const item = new Model({title:"test one"});
// item.save();