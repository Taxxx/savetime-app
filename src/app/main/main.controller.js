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
        name : 'Pepe',
        status : '0',
        charge : 'bbbb',
        doubts : 'ffff'

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
