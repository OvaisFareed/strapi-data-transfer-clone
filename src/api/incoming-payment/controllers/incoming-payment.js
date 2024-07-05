'use strict';

/**
 * incoming-payment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::incoming-payment.incoming-payment');
