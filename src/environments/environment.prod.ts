export const environment = {
  env: 'live',
  version: '@@VERSION@@',
  production: true,
  api: {
    base: 'https://api.briefy.co',
    rolleiflex: 'https://api.briefy.co'
  },
  auth: {
    google_signin: false,
    facebook_signin: false,
    jwt: {
      storageKey: 'token',
      domains: ['api.briefy.co'],
    },
    allowedGroups: [
      'g:briefy_support',
      'g:briefy_tech',
    ]
  },
  features: {
    language: {
      default: 'en',
      enableSelection: false
    },
    search: {
      enabled: false
    }
  },
  maps: 'AIzaSyCLfVbvG9ZTqoo5gez6ftC6hJccNAKgzKo',
  sentry: 'https://b0bfd5d2b3684d04bdb9aebbb29bfff5@sentry.io/121557'
};
