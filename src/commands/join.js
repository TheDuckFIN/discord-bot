'use strict';

const logger = require(__appBase + '/src/logger');

function handler(client, message, params) {
  const channel = message.member.voiceChannel;

  if (!channel) {
    logger.debug('Join command called, but can\'t join because the user is not on any voice channel.');
  }else {
    channel.join()
      .then(connection => logger.debug('Joined voice channel ' + channel.name))
      .catch(logger.error);
  }
}

module.exports = (commands_list) => {
  commands_list['join'] = handler;
}