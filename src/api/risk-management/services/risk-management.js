'use strict';

/**
 * risk-management service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::risk-management.risk-management');
