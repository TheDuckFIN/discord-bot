'use strict';

const logger = require('./logger.js');
const fs = require('fs');
const path = require('path');

const commands = {};
const commands_folder = path.join(__appBase, 'src', 'commands');

//Initialize commands list (synchronous because it's a one time initialization needed before running)
if (fs.existsSync(commands_folder)) {
  logger.info('Initializing commands');

  fs.readdirSync(commands_folder).forEach((file) => {
    logger.info('Found command file:', file);
    
    const command_path = path.join(commands_folder, file);
    require(command_path)(commands);
  });
}else {
  logger.error('Couldn\'t load command modules from folder "' + commands_folder + '" because the specified folder doesn\'t exist');
}

logger.debug('Commands object: ', commands);

module.exports = (client) => {

  const module = {};

  module.handle = (message) => {
    logger.debug('Message:', message.content);
  };

  return module;

};