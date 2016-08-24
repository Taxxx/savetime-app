(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(LxDatePickerService) {
    var vm = this;
    vm.locale = 'en';

    vm.datePicker = {
      basic:
      {
        date: new Date(),
        dateFormatted: moment().locale(vm.locale).format('LL'),
        minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 2, new Date().getDate()),
        maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 2, new Date().getDate())
      },
      input:
      {
        date: new Date(),
        dateFormatted: moment().locale(vm.locale).format('LL')
      }
    };
    vm.datePickerId = 'date-picker';

    ///////////

    vm.datePickerCallback = function(_newdate)
    {
      vm.datePicker.basic.date = _newdate;
      vm.datePicker.basic.dateFormatted = moment(_newdate).locale(vm.locale).format('LL');
    };

    vm.openDatePicker = function(_pickerId)
    {
      LxDatePickerService.open(_pickerId);
    };

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
          name : 'Jhona',
          status : '-1',
          charge : 'politic',
          doubts : 'todas'
      }, {
         name : 'Fabiola',
         status : '1',
         charge : 'ceo out',
         doubts : 'ninguna'
      }, {
           name : 'Jorge',
           status : '1',
           charge : 'marketing',
           doubts : 'algunas'
      }, {
        name : 'Jade',
        status : '5',
        charge : 'developer',
        doubts : 'oky doky'

      }, {
        name : 'Luz',
        status : '6',
        charge : 'qa',
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
