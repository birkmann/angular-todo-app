'use strict';

myApp.controller('toDoCtl', function($scope, $filter) {

	$scope.tasks = [
		{name: 'Call Mrs. Jackson', status: true},
		{name: 'Update Portfolio', status: false},
		{name: 'Meeting at 10pm', status: false},
		{name: 'Build a Web App using AngularJS', status: false}
	];

	$scope.countTasks = function() {
		return $scope.tasks.length;
	}

	$scope.addTask = function() {
		$scope.tasks.push({name:$scope.newTask, status:false});
		$scope.newTask = '';
	};

	$scope.clear = function () {
		var oldTasks = $scope.tasks;
		$scope.tasks = [];
		angular.forEach(oldTasks, function(task){
			if(!task.status) $scope.tasks.push(task);
		});
	};

});