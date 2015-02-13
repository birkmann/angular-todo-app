"use strict";

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/todo', {
        templateUrl:'templates/todo.html',
        controller: 'toDoCtl'
    })
    .when('/view2', {
        templateUrl:'/templates/view2.html',
        controller: 'view2Ctrl'
    })
    .otherwise({
        redirectTo: '/todo'
    });
});