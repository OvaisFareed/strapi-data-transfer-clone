'use strict';

/**
 * testing-log router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::testing-log.testing-log');
