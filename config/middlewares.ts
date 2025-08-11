    export default [
      'strapi::logger',
      'strapi::errors',
      {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': ["'self'", 'data:', 'blob:', 'https:'],
              'media-src': ["'self'", 'data:', 'blob:', 'https:'],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
      {
        name: 'strapi::cors',
        config: {
          enabled: true,
          headers: '*',
          origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:3001', 'cutes-cats.vercel.app']
        }
      },
       'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::body',
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ];

