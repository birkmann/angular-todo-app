'use strict';

myApp.controller('toDoCtl', function($scope, $filter) {

	$scope.tasks = [
		{name: 'Eat', status: true},
		{name: 'Learn', status: false},
		{name: 'Sleep', status: false}
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