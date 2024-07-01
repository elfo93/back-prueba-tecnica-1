let envs = {}
if(process.env.NODE_ENV !=="production"){
	const dotenv = require("dotenv");
	const result = dotenv.config();
	envs = result.parsed
}

const mongoConfig = process.env.DB_CONNECTION  || envs.DB_CONNECTION
const config = {
  mongoConfig
}

exports.mongoConfig = mongoConfig

module.exports = config;