(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(RequestService, $state, STATE) {
    var vm = this;

    $state.transitionTo(STATE.home);

    RequestService.getUsers({})
      .then(function(response){
        console.log(response);
      });

  }
})();
