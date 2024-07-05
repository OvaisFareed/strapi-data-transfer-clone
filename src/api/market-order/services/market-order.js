'use strict';

/**
 * market-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::market-order.market-order');
