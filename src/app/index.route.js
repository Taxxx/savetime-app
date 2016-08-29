(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, STATE) {
    $stateProvider
      .state(STATE.app, {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state(STATE.home, {
        // url: 'home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state(STATE.manage_event, {
        // url: '/manageEvent',
        templateUrl: 'app/manageEvent/manageEvent.html',
        controller: 'ManageEventController',
        controllerAs: 'manageEvent'
      })
      .state(STATE.about, {
        // url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state(STATE.contact, {
        // url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .state(STATE.login, {
        // url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
