'use strict';

/**
 * transfer-money service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transfer-money.transfer-money');
