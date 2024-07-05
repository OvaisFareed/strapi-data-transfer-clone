'use strict';

/**
 * international-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::international-payment.international-payment');
