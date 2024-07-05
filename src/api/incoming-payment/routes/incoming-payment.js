'use strict';

/**
 * incoming-payment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::incoming-payment.incoming-payment');
