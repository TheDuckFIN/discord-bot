'use strict';

const logger = require(__appBase + '/src/logger');
const request = require('request');

function handler(client, message, params) {
  const voiceConnection = message.channel.guild.voiceConnection;
  
  if (!voiceConnection) {
    logger.debug('Leave command called, but I\'m not on a voice channel on this server.');
  }else {
    voiceConnection.disconnect();
  }
}

module.exports = (commands_list) => {
  commands_list['leave'] = handler;
}