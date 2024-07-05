'use strict';

/**
 * home-v2 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-v2.home-v2');
