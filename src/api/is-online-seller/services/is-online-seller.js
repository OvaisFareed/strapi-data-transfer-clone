'use strict';

/**
 * is-online-seller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::is-online-seller.is-online-seller');
