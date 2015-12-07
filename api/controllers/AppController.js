/**
 * AppController
 * Author by daotrancong
 * @description :: Server-side logic for managing apps
 */

module.exports = {

	config : function(req, res, next) {
		var _res = {
			'error'   : false ,
		 	'message' : 'infoConfig',
	 		'error_message' : '',
	 		'data' : ''
	 	};

	 	var _fields = {
	 		'name'     : 'email_contact',
	 		'label'    : 'Email liên hệ',
	 		'require'  : 1,
	 		'base64_encode' : 0
	 	};

	 	var data = {
	 		'fields' : _fields
	 	}

	 	_res.data = data;

		res.send(_res);
	}
};

