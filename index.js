'use strict';

const config = require('./config');

const logger = require('./src/logger.js');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  logger.info(`Logged in as ${client.user.username}, ready for action!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(config.bot_token);