/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('bookApp.services',[]).factory('Book',function($resource){
    return $resource('http://movieapp-13434.onmodulus.net/api/books/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    };
});