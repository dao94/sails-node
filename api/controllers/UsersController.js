/**
 * UserController
 * Author by daotrancong
 * @description :: Server-side logic for managing users
 */

module.exports = {
	info : function (req ,res, next) {
		console.log(req.socket);
		var _response = {
			'error' 		: false,
			'message'       : '',
			'error_message' : '',
			'data'			: ''
		};
		UsersService.getUser(function (data) {
			_response.data = data;
			return res.send(_response);
		});
	},

	list: function (req, res) {
		UsersService._search(function (resp) {
			return res.send(resp);
		})
	},

	socccc: function (req, res){
		
	}
};

