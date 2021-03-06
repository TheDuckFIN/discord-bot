'use strict';

const config = require('./config');

const path = require('path');
global.__appBase = path.resolve(__dirname);

const logger = require('./src/logger.js');

const Discord = require('discord.js');
const client = new Discord.Client();

const commands = require('./src/commands.js')(client);

client.on("debug", logger.debug);
client.on("warn", logger.warn);

client.on('ready', () => {
  logger.info(`Logged in as ${client.user.username}, ready for action!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(config.bot_prefix)) {
    commands.handle(msg);
  }
});

client.login(config.bot_token);