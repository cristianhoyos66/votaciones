'use strict';

/**
 * @ngdoc service
 * @name votacionesFrontendApp.serviceUsers
 * @description
 * # serviceUsers
 * Service in the votacionesFrontendApp.
 */
angular.module('votacionesFrontendApp')
  .service('serviceUsers', [
    'vbaService',
    'constantMeteorConfig',
    serviceUsers
  ]);

function serviceUsers(vbaService, cmc) {

  this.getAll = function () {
    var subscribe = {
      nameSubscribe: 'usersStudents',
      nameCollection: 'usersStudentsReal',
    };
    return vbaService.subscribe(subscribe);    
  };

  this.getAllJudges =  function() {
    var subscribe = {
      nameSubscribe: 'usersJudges',
      nameCollection: 'usersJudgesReal'
    };
    return vbaService.subscribe(subscribe);
  };

  this.getUsersPersonerosCandidates =  function() {
    var subscribe = {
      nameSubscribe: 'usersPersonerosCandidates',
      nameCollection: 'usersPersonerosCandidates'
    };
    return vbaService.subscribe(subscribe);
  };

  this.getUsersComptrollerCandidates =  function() {
    var subscribe = {
      nameSubscribe: 'usersComptrollerCandidates',
      nameCollection: 'usersComptrollerCandidates'
    };
    return vbaService.subscribe(subscribe);
  };

  this.whoIsLoggedSub =  function() {
    var subscribe = {
      nameSubscribe: 'whoIsLogged',
      nameCollection: 'whoIsLogged'
    };
    return vbaService.subscribe(subscribe);
  };

  this.create = function (user) {
    return vbaService.call(cmc.methods.users.create, user);
  };

  this.update = function (user) {
    return vbaService.call(cmc.methods.users.update, user);
  };

  this.remove = function (idUser) {
    return vbaService.call(cmc.methods.users.remove, idUser);
  };

  this.setUserAsPersonero = function(idUser) {
    return vbaService.call(cmc.methods.users.setUserAsPersonero, idUser);
  };

  this.setUserAsComptroller = function(idUser) {
    return vbaService.call(cmc.methods.users.setUserAsComptroller, idUser);
  };

  this.removeUserAsPersonero = function(idUser) {
    return vbaService.call(cmc.methods.users.removeUserAsPersonero, idUser);
  };

  this.removeUserAsComptroller = function(idUser) {
    return vbaService.call(cmc.methods.users.removeUserAsComptroller, idUser);
  };

  this.whoIsLogged = function() {
    return vbaService.call(cmc.methods.users.whoIsLogged);
  };

  this.setAdminOrVoter = function(config) {
    return vbaService.call(cmc.methods.users.setAdminOrVoter, config);
  };

  this.saveUsersByExcelFile = function(fileName) {
    return vbaService.call(cmc.methods.users.saveUsersByExcelFile, fileName);
  };

  this.removeAllUsers = function() {
    return vbaService.call(cmc.methods.users.removeAllUsers);
  };

  this.getAllUsers = function() {
    return vbaService.call(cmc.methods.users.getAllUsers);
  };


}
