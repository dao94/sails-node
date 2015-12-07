App.service('app', ['$restful', function($restful) {
	var _app = {

		infoUser : function (callback) {
			$restful.get('users/info' ,function (error, resp) {
				callback(error,resp);
			});
		},
	}

	return _app;
}]);
