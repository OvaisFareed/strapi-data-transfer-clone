'use strict';

/**
 * testing-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-log.testing-log');
