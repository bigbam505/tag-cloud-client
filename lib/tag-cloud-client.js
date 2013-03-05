var request = require('request');

module.exports = Client

function Client(options) {
  var self = {};
  var _token = options.token || process.env.TAG_CLOUD_TOKEN;
  var _url = options.url || process.env.TAG_CLOUD_URL;
  var _api_prefix = '/api/';
  var _api_url = _url + _api_prefix;

  var _performApiCall = function(request_path, params, callback){
    var request_path = _api_url + request_path + '?token=' + _token;
    for(var param in params) {
      request_path += '&' + param + '=' + params[param]
    }

    request(request_path, function(error, response, body) {
      callback(body, response.statusCode);
    }); 
  }

  self.GetRandomValue = function(search_tag, callback) {
    _performApiCall('random_mapped_value', {tag: search_tag}, function(data, status_code) {
      if(status_code === 200) {
        var json = JSON.parse(data);
        callback(json);
      }
    });
  }

  return self
}

