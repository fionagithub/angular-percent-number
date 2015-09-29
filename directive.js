var APP = angular.module('APP', [])
	.directive('formatNum', function() {
		return {
			scope: {
			    num:'=' 
			},
			restrict: 'AE', 
			template: '<div class="value">{{dataNum}}</div><div class="unit">{{unit}}</div>',
			controller: function($scope) {
					$scope.data = 10000;
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
					for (var i = 0; i < symbols.length; i++) {
						var sym = symbols[i];

						if ($scope.data / sym[0] >= 1) {
							output = sym[1] + output;
							$scope.data /= sym[0];
						}
					}
					$scope.dataNum = (Math.round($scope.data * round) / round);
					$scope.unit = output;
			
			}
		}
	})

;