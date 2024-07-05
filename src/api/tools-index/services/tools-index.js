'use strict';

/**
 * tools-index service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tools-index.tools-index');
