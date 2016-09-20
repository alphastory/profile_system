/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'final',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    
    firebase: {
      apiKey: 'AIzaSyC9wS42nOHpnceWxRHvrRvtFg05EncW_vs',
      authDomain: 'finalproject-7c7cf.firebaseapp.com',
      databaseURL: 'https://finalproject-7c7cf.firebaseio.com',
      storageBucket: 'finalproject-7c7cf.appspot.com',
      messagingSenderId: "376432352630"
    },

    torii: {
      sessionServiceName: 'session'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
