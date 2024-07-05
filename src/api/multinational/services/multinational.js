'use strict';

/**
 * multinational service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::multinational.multinational');
