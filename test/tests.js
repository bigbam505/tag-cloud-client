var client = require('../lib/tag-cloud-client.js'),
    should = require('should'),
    nock = require('nock');

var testOptions = {
  siteUrl: 'http://tag-cloud.com',
  siteToken: 'apikey'
}

var Client = new client({url: testOptions.siteUrl, token: testOptions.siteToken})

  describe('Client', function(){
    describe('#version', function(){
      it('should return a correct version number', function(){
        Client.version.should.match(/^\d+\.\d+\.\d+$/);
      })
    })

    describe('#GetRandomValue', function(){
      nock(testOptions.siteUrl)
      .get('/api/random_mapped_value?token=' + testOptions.siteToken + '&tag=random')
      .reply(200, {
        created_at: '2013-02-05T13:18:41Z',
        id: 5,
        tag_id: 3,
        update_at: '2013-02-05T13:18:41Z',
        value:'my-returned-value'
      });

    it('should return a random value for a tag', function(done){
      Client.GetRandomValue('random', function(data){
        data.should.include({value:'my-returned-value'});
        done();
      });
    })
    })
  })





