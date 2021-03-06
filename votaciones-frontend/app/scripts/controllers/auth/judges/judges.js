'use strict';

/**
 * @ngdoc function
 * @name votacionesFrontendApp.controller:AuthJudgesJudgesCtrl
 * @description
 * # AuthJudgesJudgesCtrl
 * Controller of the votacionesFrontendApp
 */
angular.module('votacionesFrontendApp')
  .controller('AuthJudgesJudgesCtrl', [
    '$uibModal',
    '$timeout',
    'serviceUsers',
    'serviceMessages',
    AuthJudgesJudgesCtrl
  ]);

function AuthJudgesJudgesCtrl($uibModal, $timeout, serviceUsers, serviceMessages) {

  var judgesVm = this;

  function instanceJudgesModal(judge) {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/auth/judges/editcreate.html',
      size: 'lg',
      controller: 'AuthJudgesEditcreateCtrl as editcreateVm',
      backdrop: false,
      resolve: {
	resolveData: function() {
	  return judge;
	}
      }
    });
  }

  function newJudge() {
    instanceJudgesModal();
  }

  function editJudge(judge) {
    instanceJudgesModal(angular.copy(judge));
  }

   function resolveRemoveJudge (resolve) {
    serviceMessages.generalMessage('Eliminado', 'Registro eliminado con éxito', "success"); 
  }

  function errorRemoveJudge() {
    serviceMessages.generalMessage('Error', 'Error de operación', "error");
  }

  function removeJudge(judge) {
    swal({   
      title: '¿Estás seguro?',   
      text: 'Si eliminas este registro, no se podrá recuperar',   
      type: "warning",   
      showCancelButton: true,   
      confirmButtonColor: "#F0AD4E",   
      confirmButtonText: 'Sí, eliminar',   
      cancelButtonText: 'Cancelar',
      cancelButtonColor: "#EF5350",
      closeOnConfirm: false 
    }, function() {   
      if (judge) {
	serviceUsers.remove(judge._id).then(resolveRemoveJudge, errorRemoveJudge);
      }
    });
  }

  function redrawFootable() {
    $timeout(function() {
      $('.footable').trigger('footable_redraw');
    }, 1);
  }

  function errorGetAllUsers() {
    serviceMessages.generalMessage('Error', 'Error de operación', "error");
  }

  function notifyGetAllUsers(users) {
    redrawFootable();
    judgesVm.judges = users;
  }

  serviceUsers.getAllJudges().then(0, errorGetAllUsers, notifyGetAllUsers);
  redrawFootable();
  judgesVm.newJudge = newJudge;
  judgesVm.editJudge = editJudge;
  judgesVm.removeJudge = removeJudge;
}
