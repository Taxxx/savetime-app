(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.person

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

        name : 'Jade',
        status : '5',
        charge : 'developer',
        doubts : 'oky doky'

      }, {
        name : 'Luz',
        status : '6',
        charge : 'qa'
        doubts : 'Pika Pika'

      }];

    vm.sayHello = function() {
      alert('Hola');
    };

    vm.sayBye = function() {
       alert('Chau');
    };

  }
})();
