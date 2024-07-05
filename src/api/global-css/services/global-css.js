'use strict';

/**
 * global-css service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-css.global-css');
