/*

Service for users

*/
var elasticsearch = require('elasticsearch');
var client        = new elasticsearch.Client({
  host: '123.31.11.114:9200',
  log: 'trace'
});

module.exports = {

	_search : function (callback) {
		client.search({
		  index: 'log_request_vietid',
		  body: {
		    query: {
		      match_all: {}
		    }
		  }
		}).then(function (resp) {
		    var hits = resp.hits;
		    callback(hits);
		}, function (err) {
		    console.trace(err.message);
		});
	},
	getUser: function(next) {
		Users.find().exec(function(err, user) {
		  if(err) throw err;
		  next(user);
		})
	},
}