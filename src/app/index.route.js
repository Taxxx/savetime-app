(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'  //use at main.html
      });

    $urlRouterProvider.otherwise('/');
  }

})();
