'use strict';

var carApp = angular.module('carApp', ['ngRoute']);

carApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/buy',{
			templateUrl: 'template/buy.html',
			controller: 'BuyController'
		})
		.when('/',{
			templateUrl: 'template/home.html',
			controller: 'HomeController'
		})
		.when('/sell',{
			templateUrl: 'template/sell.html',
			controller: 'SellController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

carApp.controller('carAppController', ['$scope', '$http', '$location', function($scope, $http, $location) {

}]);
carApp.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location) {

}]);

carApp.controller('BuyController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		$http.get('./cars/cars.json').success(function(data, status , headers, config) {
			$scope.cars = data;
		});
}]);
carApp.controller('SellController', ['$scope', '$http', '$location', function($scope, $http, $location) {

}]);
carApp.controller('SController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$scope.car = car;
}]);
carApp.controller('ShowAdController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$http.get('/car/car.json').success(function(data, status , headers, config) {
			$scope.cars = data;
		});
}]);
carApp.controller('Ctrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
		$scope.list = {
        car: "", 
        id: "", 
        imageUrl: "", 
        model: "", 
        snippet: "",
        price: "",
        mileage: "",
        fuel: "",
        transmission: "",
        engine: "",
        phone: "",
        year:"" 
    };
	  $scope.submit = function() {
	    this.list.name = this.name;
	    this.list.car = this.car;
	    this.list.id = this.id;
	    this.list.imageUrl = this.imageUrl;
	    this.list.model = this.model;
	    this.list.snippet = this.snippet;
	    this.list.price = this.price;
	    this.list.mileage = this.mileage;
	    this.list.fuel = this.fuel;
	    this.list.transmission = this.transmission;
	    this.list.engine = this.engine;
	    this.list.phone = this.phone;
	    this.list.year = this.year;
	    $http.get('cars/cars.json').success(function(data, status , headers, config) {
				$scope.cars = data;
				$scope.cars.push($scope.list);
				console.log($scope.cars);
				$http.post('cars/cars.json').success(function(data, status , headers, config) {
					$scope.cars = data;
					console.log(1);
				});
			});
			$http.post('cars/cars.json').success(function(data, status , headers, config) {
					$scope.cars = data;
					console.log(1);
				});
		};
}]);
