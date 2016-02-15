'use strict';

/**
 * @ngdoc service
 * @name votacionesFrontendApp.constantMeteorConfig
 * @description
 * # constantMeteorConfig
 * Constant in the votacionesFrontendApp.
 */
angular.module('votacionesFrontendApp')
  .constant('constantMeteorConfig', {
    url: '127.0.0.1:3000',
    urlServer: 'http://127.0.0.1:3000/',
    methods: {
      users: {
	create: 'userCreate',
	update: 'updateUser',
	remove: 'removeUser',
	setUserAsPersonero: 'setUserAsPersonero',
	setUserAsComptroller: 'setUserAsComptroller',
	removeUserAsPersonero: 'removeUserAsPersonero',
	removeUserAsComptroller: 'removeUserAsComptroller',
	whoIsLogged: 'whoIsLogged',
	setAdminOrVoter: 'setAdminOrVoter',
	saveUsersByExcelFile: 'saveUsersByExcelFile',
	removeAllUsers: 'removeAllUsers'
      },
      uploads: {
	uploadFile: 'getRouteFile'
      },
      ratings: {
	startRating: 'startRating',
	stopRating: 'stopRating',
	refreshRating: 'refreshRating',
	rate: 'rate'
      }
    }
  });
