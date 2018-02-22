/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('bookApp',['ui.router','ngResource','bookApp.controllers','bookApp.services']);

angular.module('bookApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('books',{
        url:'/books',
        templateUrl:'partials/movies.html',
        controller:'MovieListController'
    }).state('viewBook',{
       url:'/books/:id/view',
       templateUrl:'partials/movie-view.html',
       controller:'MovieViewController'
    }).state('newBook',{
        url:'/books/new',
        templateUrl:'partials/movie-add.html',
        controller:'MovieCreateController'
    }).state('editBook',{
        url:'/books/:id/edit',
        templateUrl:'partials/movie-edit.html',
        controller:'MovieEditController'
    });
}).run(function($state){
   $state.go('books');
});