'use strict';

var express = require('express');

function routeBuilder (routerConfig) {
  var router = express.Router();
  Object.keys(routerConfig).forEach(function (path) {
    routerConfig[path].forEach(function (val) {
      var method = val.method.toLowerCase();
      var handler = val.handler;

      router[method](path, handler);
    });
  });
  return router;
}

module.exports = routeBuilder;
