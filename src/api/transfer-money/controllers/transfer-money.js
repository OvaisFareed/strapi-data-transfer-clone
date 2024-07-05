'use strict';

/**
 * transfer-money controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::transfer-money.transfer-money');
