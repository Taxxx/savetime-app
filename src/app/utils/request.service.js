(function() {
  'use strict';

  angular
    .module('savetimeApp')
    .service('RequestService', RequestService);

  function RequestService(Restangular, toastr, SAVETIME_URL) {
    var service = {};
    Restangular.setBaseUrl(SAVETIME_URL);
    // Restangular.setBaseUrl('http://localhost\\:8080');

    service.getUsers = function() {
      var baseRequest;
      var request;
      baseRequest = Restangular.all(SAVETIME_URL + 'users');
      request = baseRequest.getList();
      return request;
    };

    service.getPosts = function() {
      var baseRequest;
      var request;
      baseRequest = Restangular.all(SAVETIME_URL + 'posts');
      request = baseRequest.getList();
      return request;
    };

    return service;
  }
})();
