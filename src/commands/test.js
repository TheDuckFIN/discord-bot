'use strict';

const logger = require(__appBase + '/src/logger');

function handler(client, message, params) {
  logger.debug('Command test called, with params:', params);
}

module.exports = (commands_list) => {
  commands_list['test'] = handler;
}