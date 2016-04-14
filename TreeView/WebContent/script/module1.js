/**
 * 
 */

var myApp = angular.module("myModule", []);

myApp.controller("myController",function($scope){
	var employee = {
			fName: "Frank",
			lName: "Bahrami",
			gender: "Male"
	};
	
	$scope.message = "Angular JS Tutorial";
	$scope.employee = employee;
});

myApp.controller('Hello', function($scope, $http){
    $http.get("http://rest-service.guides.spring.io/greeting").then(function(response){
//   	alert("Got Hello: ",data);
     	$scope.greeting = response.data;
    });
});

myApp.controller('customersCtrl', function($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php").then(function(response) {
 //   	alert("Got names: ",response.data.records[0]);
    	$scope.names = response.data.records;
    });
});

//declaration in one line
/*
var myApp = angular.module("myModule", [])
				   .controller("myController",function($scope){
						var employee = {
								fName: "Frank",
								lName: "Bahrami",
								gender: "Male"
						};
						
						$scope.message = "Angular JS Tutorial";
						$scope.employee = employee;
					});

*/
//consuming web service from http://rest-service.guides.spring.io/greeting'
