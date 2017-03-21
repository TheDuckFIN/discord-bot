'use strict'

const secret_config_file = './secret_config.json';
let config;

try {
    config = require(secret_config_file);
} catch (err) {
    console.log("secret_config.json not found, using ENV variables");

    config = {
        "bot_token": process.env.BOT_TOKEN
    }
}

module.exports = config;