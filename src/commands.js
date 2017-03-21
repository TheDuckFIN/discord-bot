'use strict';

const logger = require('./logger.js');

module.exports = (client) => {

  const module = {};

  module.handle = (message) => {
    logger.debug('Message:', message.content);
  };

  return module;

};