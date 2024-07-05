'use strict';

/**
 * forward-contract service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forward-contract.forward-contract');
