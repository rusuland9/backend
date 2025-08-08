export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['9f50c580fbcb9bde6e523ea3ef28f777', 'abad9432d7abc7fcb3bd067df756bea2'],
  },
});
