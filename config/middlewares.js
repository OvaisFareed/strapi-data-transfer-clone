module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      formLimit: "500mb", // modify form body
      jsonLimit: "500mb", // modify JSON body
      textLimit: "500mb", // modify text body
      formidable: {
        maxFileSize: 500 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    }
  }
];
