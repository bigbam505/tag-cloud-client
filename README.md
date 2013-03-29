[![Build Status](https://travis-ci.org/bigbam505/tag-cloud-client.png?branch=master)](https://travis-ci.org/bigbam505/tag-cloud-client)
## About

[Tag-Cloud Client](http://github.com/bigbam505/tag-cloud-client) is a node module designed to integration with [Tag-Cloud](http://github.com/bigbam505/tag-cloud) easily.  It allows for a simple api to communicate with the external Tag-Cloud server and pull in random values.  Ideally this would be used within a campfire script to get an external value.

## Tag-Cloud Client Usage

    var client = require('tag-cloud-client');
    var TagCloud = new Client({token: 'tag-cloud-token', url: 'http://tag-cloud.domain.com/});
    TagCloud.GetRandomValue('tag-name', function(value) {
      console.log(value);
    });


## Enviromental Variables

    Optionally you can specifiy Enviromental Variables for the following values
    - TAG_CLOUD_TOKEN : The token that is set on the Tag-Cloud Server
    - TAG_CLOUD_URL : The url of the tag cloud server absent a trailing slash

## Issues

Issues for this module can be sent to [Tag-Cloud Client Issues](https://github.com/bigbam505/tag-cloud-client/issues)


## License

Copyright (c) 2013 Brent Montague

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
