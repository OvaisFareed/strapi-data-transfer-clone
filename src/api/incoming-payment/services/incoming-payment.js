'use strict';

/**
 * incoming-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::incoming-payment.incoming-payment');
