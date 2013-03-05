var client = require('../lib/tag-cloud-client')

var test  = new client(
    {
      token: 'secret-token',
      url: 'http://tag-cloud.domain.com' 
    });

test.GetRandomValue('image-tag', function(data){
  console.log(data);
});
