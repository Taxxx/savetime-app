/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)

    // Global configurations
    .constant('CONFIG', {
      __SERVICE_PATH : '/'
    })

    // Available states on the savetime app
    .constant('STATE', {
      app:         'app',

      about:       'about',
      contact:     'contact',
      login:       'login'

    });

})();
