(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.user = [
      {
        name : 'Henrry',
        status : '1',
        charge : 'backend',
        doubts : 'aaaaaa'
      }, {

      }, {

      }, {

      }, {

      }, {

      }, {

      }];

    vm.sayHello = function() {
      alert('Hola');
    };

    vm.sayBye = function() {
       alert('Chau');
    };

  }
})();
