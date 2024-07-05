'use strict';

/**
 * is-medical service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::is-medical.is-medical');
