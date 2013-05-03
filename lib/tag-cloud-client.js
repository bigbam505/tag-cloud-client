var request = require('request');

module.exports = Client

function Client(options) {
  var self = {};
  options = options || {};
  var _token = options.token || process.env.TAG_CLOUD_TOKEN;
  var _url = options.url || process.env.TAG_CLOUD_URL;
  var _api_prefix = '/api/';
  var _api_url = _url + _api_prefix;

  self.version = '0.0.3';

  var _getStatusCode = function(response){
    if(response)
      return response.statusCode;
    else
      return 500;
  }

  var _apiPostCall = function(request_path, params, callback){
    var request_path = _api_url + request_path;
    params.token = _token;

    request({uri: request_path, form: params, method: 'POST'}, function(error, response, body) {
      var statusCode = _getStatusCode(response);
      var return_value = body;
      if(error)
        return_value = error.message;

      callback(return_value, statusCode);
    });
  }

  var _performApiCall = function(request_path, params, callback){
    var request_path = _api_url + request_path + '?token=' + _token;
    for(var param in params) {
      request_path += '&' + param + '=' + params[param]
    }

    request(request_path, function(error, response, body) {
      var statusCode = _getStatusCode(response);
      var return_value = body;
      if(error)
        return_value = error.message;

      callback(return_value, statusCode);
    });
  }

  self.GetRandomValue = function(search_tag, callback) {
    _performApiCall('random_mapped_value', {tag: search_tag}, function(data, status_code) {
      if(status_code === 200) {
        var json = JSON.parse(data);
        callback(json);
      } else{
        callback('Error:' + data);
      }
    });
  }

  self.AddValue = function(new_value, tag, callback){
    _apiPostCall('mapped_values', {value: new_value, tag_name: tag}, function(data, status_code) {
      if(status_code === 200) {
        var json = JSON.parse(data);
        callback(json);
      } else{
        callback('Error:' + data);
      }
    });
  }

  return self
}

