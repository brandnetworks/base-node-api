Node API
========

This API code was based off the [Express generator](https://www.npmjs.com/package/express-generator).
To run this,

    # npm install -g gulp
    cd api
    npm install
    DEBUG='api:server' npm start

For more information on debugging, see the [debug module](https://www.npmjs.com/package/express-generator).
Other values for DEBUG to try include:

    DEBUG='*' npm start
    DEBUG='api:*' npm start

To format, lint, and test,

    npm test

To run those functions automatically on code change,

    gulp
