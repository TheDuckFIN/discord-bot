'use strict';

const logger = require(__appBase + '/src/logger');

function handler(client, message, params) {
  client.destroy();
  process.exit();
}

module.exports = (commands_list) => {
  commands_list['quit'] = handler;
}