'use strict';

/**
 * test-html service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-html.test-html');
