(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .controller('ManageEventController', ManageEventController);

  /** @ngInject */
  function ManageEventController(RequestService) {
    var vm = this;
    vm.events = [];

    RequestService.getPosts({})
      .then(function(response){
        vm.events = response;
      });

  }
})();
