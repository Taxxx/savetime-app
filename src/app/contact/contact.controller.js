(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .controller('ContactController', ContactController);

    function ContactController() {

    	var vm = this;

        vm.switches = {
            basic:
            {
                checked: true,
                unchecked: false
            },
            states:
            {
                disabled: false
            },
            colors:
            {
                blue: true
            }
        };

         $scope.returnToMain = function($window) {
            $window.location.href = '#/index.html';
        };
    }
})();