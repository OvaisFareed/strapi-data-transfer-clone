'use strict';

/**
 * bp-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bp-blog.bp-blog');
