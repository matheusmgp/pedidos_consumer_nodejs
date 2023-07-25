const mongoose = require("mongoose");

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

mongoose.connect(`mongodb://127.0.0.1:27017/pedidos`, {
  useNewUrlParser: true,
});

mongoose.connection.on("error", () => console.error("connection error:"));
mongoose.connection.once("open", () => console.log("database connected"));

mongoose.Promise = global.Promise;

module.exports = mongoose;
