const unparsed = require("koa-body/unparsed.js");

module.exports = {
  async index(...args) {
    const entries = await strapi.entityService.findMany('api::economic-events-with-date.economic-events-with-date', {
      publicationState: 'preview',
      filters: {
        publishedAt: {
          $null: true,
        },
      },
    });
    return entries;

  },
  async create(ctx) {
    // Access the request body
    const requestBody = ctx.request.body;

    const response = await strapi.db.query("api::economic-events-with-date.economic-events-with-date").createMany({
      data: requestBody,
    });

    const entries = await strapi.entityService.findMany('api::economic-events-with-date.economic-events-with-date', {
      publicationState: 'preview',
      filters: {
        publishedAt: {
          $null: true,
        },
      },
    });

    const unpublishedIds = entries.map((record) => record.id);
    
    if (unpublishedIds.length) {
      unpublishedIds.map(async (record) => {
        const query = {
          where: {
            id: record
          },
          data: {
            publishedAt: new Date().toISOString()
          }
        }
        await strapi.db.query('api::economic-events-with-date.economic-events-with-date').update(query)
      });
    }

    // Send a response
    return {
      message: 'Resources created successfully',
      data: entries,
    };
  },

async createTest(ctx) {
    // Access the request body
    const requestBody = ctx.request.body;

    const response = await strapi.db.query("api::testing.testing").createMany({
      data: requestBody,
    });

    const entries = await strapi.entityService.findMany('api::testing.testing', {
      publicationState: 'preview',
      filters: {
        publishedAt: {
          $null: true,
        },
      },
    });

    const unpublishedIds = entries.map((record) => record.id);
    
    if (unpublishedIds.length) {
      unpublishedIds.map(async (record) => {
        const query = {
          where: {
            id: record
          },
          data: {
            publishedAt: new Date().toISOString()
          }
        }
        await strapi.db.query('api::testing.testing').update(query)
      });
    }

    // Send a response
    return {
      message: 'Resources created successfully',
      data: entries,
    };
  },


async updateMany(ctx) {
    try {
    const entries = await strapi.entityService.findMany('api::economic-events-with-date.economic-events-with-date', {
      publicationState: 'preview',
      filters: {
        publishedAt: {
          $null: true,
        },
      },
    });

    const unpublishedIds = entries.map((record) => record.id);
    
    if (unpublishedIds.length) {
      unpublishedIds.map(async (record) => {
        const query = {
          where: {
            id: record
          },
          data: {
            publishedAt: new Date().toISOString()
          }
        }
        await strapi.db.query('api::economic-events-with-date.economic-events-with-date').update(query)
      });
    }

    return {
      success: true
      //message: `${result.length} records updated successfully.`,
      //data: result,
    };
    } catch (err) {
      return {
        success: false,
        message: 'An error occurred while updating records.',
        error: err.message,
      };
    }
  }
};