'use strict';

const fs = require('fs');
const path = require('path');

const logger = require(__appBase + '/src/logger.js');
const config = require(__appBase + '/config');

const commands = {};
const commands_folder = path.join(__appBase, 'src', 'commands');

//Initialize commands list (synchronous because it's a one time initialization needed before running)
if (fs.existsSync(commands_folder)) {
  logger.info('Initializing commands');

  fs.readdirSync(commands_folder).forEach((file) => {
    logger.debug('Found command file:', file);
    
    const command_path = path.join(commands_folder, file);
    require(command_path)(commands);
  });
}else {
  logger.error('Couldn\'t load command modules from folder "' + commands_folder + '" because the specified folder doesn\'t exist');
}


module.exports = (client) => {

  const module = {};

  module.handle = (message) => {
    let msg_split = message.content.split(" ");
    let command = msg_split[0].substring(config.bot_prefix.length);

    if (commands.hasOwnProperty(command)) {
      logger.debug('Command called:', command);
      commands[command](client, message, msg_split.slice(1));
    }else {
      logger.debug('Unknown command called:', command);
    }
  };

  return module;

};