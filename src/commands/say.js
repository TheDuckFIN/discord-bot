'use strict';

const logger = require(__appBase + '/src/logger');

function handler(client, message, params) {
  if (params.length > 0) {
    message.channel.sendMessage(params.join(' '));
  }else {
    message.channel.sendMessage('Say what?');
  }
}

module.exports = (commands_list) => {
  commands_list['say'] = handler;
}