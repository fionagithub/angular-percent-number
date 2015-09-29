var APP = angular.module('APP', []).
controller('MainCtrl', function($scope) {
	$scope.change = function(query) {
		var output = '';
		var round = 10;
		var symbols = [
			[Math.pow(10, 16), '京'],
			[Math.pow(10, 12), '兆'],
			[Math.pow(10, 8), '億'],
			[Math.pow(10, 4), '万'],
			[Math.pow(10, 3), '千'],
			[Math.pow(10, 2), '百']
		];
		var num;
		var unit;

		for (var i = 0; i < symbols.length; i++) {
			var sym = symbols[i];

			if (query / sym[0] >= 1) {
				output = sym[1] + output;
				query /= sym[0];
			}
		}
		$scope.num = (Math.round(query * round) / round) ;
		$scope.unit = output;
	}
})