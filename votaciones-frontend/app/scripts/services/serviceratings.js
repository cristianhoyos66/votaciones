'use strict';

/**
 * @ngdoc service
 * @name votacionesFrontendApp.serviceRatings
 * @description
 * # serviceRatings
 * Service in the votacionesFrontendApp.
 */
angular.module('votacionesFrontendApp')
  .service('serviceRatings', [
    'vbaService',
    'constantMeteorConfig',
    serviceRatings
  ]);

function serviceRatings(vbaService, cmc) {

  this.getRatings =  function() {
    var subscribe = {
      nameSubscribe: 'ratings',
      nameCollection: 'ratings'
    };
    return vbaService.subscribe(subscribe);
  }

  this.getAllRatings =  function() {
    var subscribe = {
      nameSubscribe: 'ratingsAll',
      nameCollection: 'ratingsAll'
    };
    return vbaService.subscribe(subscribe);
  }

  this.startRating = function(idTypeRating) {
    return vbaService.call(cmc.methods.ratings.startRating, idTypeRating);
  }

  this.stopRating = function(idTypeRating) {
    return vbaService.call(cmc.methods.ratings.stopRating, idTypeRating);
  }

  this.refreshRating = function(idTypeRating) {
    return vbaService.call(cmc.methods.ratings.refreshRating, idTypeRating);
  }

  this.rate = function(config) {
    return vbaService.call(cmc.methods.ratings.rate, config);
  }

  this.downloadRateByPersonero = function() {
    return vbaService.call(cmc.methods.ratings.downloadRateByPersonero);
  }

  this.downloadRateByComptroller = function() {
    return vbaService.call(cmc.methods.ratings.downloadRateByComptroller);
  }
  
}
