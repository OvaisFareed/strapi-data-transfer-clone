'use strict';

/**
 * small-business service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::small-business.small-business');
