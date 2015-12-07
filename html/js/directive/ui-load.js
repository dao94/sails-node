app.directive('ngTicket', ['$http', function($http) {
    return {
        restrict: 'A',
        templateUrl: 'customer/tpl/template/tb_ticket.html',
        link : function ($scope) {
			$scope.current_page   = 1;
			$scope.numper_page    = 10;
			$scope.max_size       = 5;
        }
    }
}]);