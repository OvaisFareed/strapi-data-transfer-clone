'use strict';

/**
 * currency-conversion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::currency-conversion.currency-conversion');
