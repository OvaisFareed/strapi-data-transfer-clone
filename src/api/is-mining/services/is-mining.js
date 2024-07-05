'use strict';

/**
 * is-mining service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::is-mining.is-mining');
