var client = require('../lib/tag-cloud-client')

var test  = new client(
    {
      token: 'helloworld',
      url: 'http://localhost:5000'
    });

test.GetRandomValue('image-tag', function(data){
  console.log(data);
});

test.AddValue('new-value-yay', 'tag-one', function(data){
  console.log(data);
})
