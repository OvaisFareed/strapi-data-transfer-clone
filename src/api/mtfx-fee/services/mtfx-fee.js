'use strict';

/**
 * mtfx-fee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mtfx-fee.mtfx-fee');
