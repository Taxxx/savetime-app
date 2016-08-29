(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $state, STATE) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.selectedOption = 'home';

      vm.goToView = function(view) {
        vm.selectedOption = view;
        switch(view) {
          case 'home':
            if($state.$current.includes[STATE.home]) {
              $state.reload(STATE.home);
            } else {
              $state.go(STATE.home);
            }
            break;
          case 'about':
            if($state.$current.includes[STATE.about]) {
              $state.reload(STATE.about);
            } else {
              $state.go(STATE.about);
            }
            break;
          case 'manageEvent':
            if($state.$current.includes[STATE.manage_event]) {
              $state.reload(STATE.manage_event);
            } else {
              $state.go(STATE.manage_event);
            }
            break;
          case 'contact':
            if($state.$current.includes[STATE.contact]) {
              $state.reload(STATE.contact);
            } else {
              $state.go(STATE.contact);
            }
            break;
          case 'login':
            if($state.$current.includes[STATE.login]) {
              $state.reload(STATE.login);
            } else {
              $state.go(STATE.login);
            }
            break;
          default:
        }
      };
    }
  }

})();
