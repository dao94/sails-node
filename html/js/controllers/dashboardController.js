App.controller('dashboard',['$scope', '$restful', 'app', function($scope, $restful, app) {
	
	app.infoUser(function (err ,res) {
		if(err)
			return false;
		console.log(res);	
	});

}]);