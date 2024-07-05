'use strict';

/**
 * forward-contract router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::forward-contract.forward-contract');
