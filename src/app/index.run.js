(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
