'use strict';

var express = require('express');

function routeBuilder (routerConfig) {
  var router = express.Router();
  Object.keys(routerConfig).forEach(function (path) {
    var method = routerConfig[path].method.toLowerCase();
    var handler = routerConfig[path].handler;

    router[method](path, handler);
  });
  return router;
}

module.exports = routeBuilder;
