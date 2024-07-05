'use strict';

/**
 * is-legal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::is-legal.is-legal');
