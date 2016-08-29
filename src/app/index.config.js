(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider, CONFIG) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    RestangularProvider.setBaseUrl(CONFIG.__SERVICE_PATH);

    RestangularProvider.setRequestInterceptor(function(elem, operation) {
      if (operation === 'put') {
        elem._id = undefined;
        return elem;
      }
      return elem;
    });
  }

})();
