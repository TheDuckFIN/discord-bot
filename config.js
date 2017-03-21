'use strict';

let config;
const secret_config_file = './secret_config.json';

try {
  config = require(secret_config_file);
} catch (err) {
  console.log("secret_config.json not found, using ENV variables");

  config = {
    "bot_token": process.env.BOT_TOKEN
  }
}

//general non-secret config
config.log = {
  "file_level": "debug",
  "console_level": "debug",
  "file": "bot.log"
}

module.exports = config;