App.service('$restful', ['$http', '$rootScope', '$resource','$auth', function ( $http, $rootScope, $resource,$auth){

		return {
			get: function (resource, data, callback){
				callback         = (data && typeof data == 'function') ? data : callback;
				var access_token = data && data.access_token ? data.access_token : $auth.getUser() ? $auth.getUser().access_token : '';
				if(data)
					data.access_token = access_token;
				else
					data = {'access_token' : access_token};
				$http.get(ApiPath + resource, {params: data}).success(function (resp){
					if(resp.error){
						return callback(resp.message, resp);
					}
					return  callback(null, resp);
				}).error(function (error){
					return callback(error, null);
				})
			},

			post : function (resource, data, callback) {
				callback         = (data && typeof data == 'function') ? data : callback;
				var access_token = data && data.access_token ? data.access_token : $auth.getUser() ? $auth.getUser().access_token : '';
				if(data)
					data.access_token = access_token;
				else
					data = {'access_token' : access_token};
				$http({
				    method: 'POST',
				    url: ApiPath + resource,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    },
				    data: data

				}).success(function (resp) {
					if(resp.error){
						return callback(resp.message , resp);
					}
					return  callback(null, resp);
				}).error(function (error){
					return callback(error, null);
				});
			}

		};
	}])