'use strict';

const config = require('./../config');

const winston = require('winston');

//winston configuration
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: config.log.console_level,
      colorize: true
    }),
    
    new (winston.transports.File)({
      filename: config.log.file,
      level: config.log.file_level
    })
  ]
});

module.exports = logger;