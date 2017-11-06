// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  env: 'dev',
  version: 'dev',
  production: false,
  api: {
    // development config
    base: 'http://localhost:8000',
    rolleiflex: 'http://localhost:8000',
  },
  auth: {
    google_signin: false,
    facebook_signin: false,
    jwt: {
      storageKey: 'token',
      domains: ['localhost:8000', 'api.stg.briefy.co'],
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
  cityPackages: {
    cities: [
      { slug: 'berlin', name: 'Berlin', projectId: '6f842680-749e-4898-582d-27b240c93c34' }
    ]
  },
  maps: 'AIzaSyCLfVbvG9ZTqoo5gez6ftC6hJccNAKgzKo',
  sentry: 'https://b0bfd5d2b3684d04bdb9aebbb29bfff5@sentry.io/121557'
};
