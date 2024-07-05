'use strict';

/**
 * batch-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::batch-payment.batch-payment');
