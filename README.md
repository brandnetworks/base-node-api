Node API
========

Hacking
-------

The API code was based off the [Express generator](https://www.npmjs.com/package/express-generator).
To run it on your local machine,

    cd api
    npm install
    DEBUG='api:server' npm start

On Windows, the corresponding command is,

    set DEBUG=api:server & npm start

For more information on debugging, see the [debug module](https://www.npmjs.com/package/debug).
Other values for DEBUG to try include:

```
DEBUG='*' npm start
DEBUG='api:*' npm start
```

To format, lint, and test,

    npm test

To watch the source for changes and run the tests automatically,

    # npm install -g gulp
    gulp

Docker
------

See the [Docker site](https://www.docker.com/) for an introduction if you are not familiar with it.

To build a Docker image suitable for deployment, run `./build.sh`,
which is based off the pattern described in [geowa4/docker-node-runtime](https://github.com/geowa4/docker-node-runtime).
Using this strategy, the resulting image is ~10MB smaller.
Also, the full `npm install` can happen in Docker so, technically, you do not need Node installed on your local machine.
