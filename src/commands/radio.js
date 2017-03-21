'use strict';

const logger = require(__appBase + '/src/logger');
const request = require('request');

function handler(client, message, params) {
  const server = message.channel.guild;
  const voiceConnection = server.voiceConnection;
  
  if (!voiceConnection) {
    logger.debug('Radio command called, but I\'m not on a voice channel.');
    message.reply('please invite me to a voice channel first!');
  }else {
    const stream = request('http://stream3.bauermedia.fi/nova.mp3');

    voiceConnection.playStream(stream, { seek: 0, volume: 1 });
  }
}

module.exports = (commands_list) => {
  commands_list['radio'] = handler;
}