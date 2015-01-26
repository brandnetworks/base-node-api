Node API
========

Hacking
-------

The API code was based off the [Express generator](https://www.npmjs.com/package/express-generator).
To run it on your local machine,

    cd api
    npm install
    DEBUG='api:server' npm start

For more information on debugging, see the [debug module](https://www.npmjs.com/package/express-generator).
Other values for DEBUG to try include:

    DEBUG='*' npm start
    DEBUG='api:*' npm start

To format, lint, and test,

    npm test

To watch the source for changes and run the tests automatically,

    # npm install -g gulp
    gulp

Docker
------

See the [Docker site](https://www.docker.com/) for an introduction if you are not familiar with it.

To build a Docker image to run the source as is,

    docker build --tag node-api .

where "api" can be changed to your liking.
To run the image,

    docker run --name api --rm -t -p 3000:3000 node-api start

or

    docker run --name api --rm -t -p 3000:3000 node-api

since "start" is the default command.

Now, you should be able to `curl 192.168.59.103:3000/` where the IP is that of your Docker host.

Before running this again, you'll need to run

    docker kill api
    docker rm api

where "base-node-api" matches the tag applied during build ("--tag node-api")
and "api" matches the name you gave the running container ("--name api").

That image can also be used to run the tests by explicitly specifying the test command,

    docker run --name api --rm -t -p 3000:3000 node-api test
