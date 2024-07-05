'use strict';

/**
 * fx-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fx-payment.fx-payment');
