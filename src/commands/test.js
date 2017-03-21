'use strict';

const logger = require(__appBase + '/logger');
let client;

function handler(data) {
  logger.debug('Command test called, with data: ' + data);
}

module.exports = (commands_list) => {
  commands_list['test'] = handler;
}