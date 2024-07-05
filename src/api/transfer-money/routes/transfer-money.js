'use strict';

/**
 * transfer-money router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::transfer-money.transfer-money');
