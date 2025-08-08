export default ({ env }) => ({
  auth: {
    secret: '8735bfd9bd80e64d41bda4515e3bd328',
  },
  apiToken: {
    salt: '01d9f07ff4907e4e',
  },
  transfer: {
    token: {
      salt: '7562facb4f51a278',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
