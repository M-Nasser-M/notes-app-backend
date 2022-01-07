const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
};
