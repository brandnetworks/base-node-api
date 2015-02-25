'use strict';

var chai = require('chai');
var expect = chai.expect;
var httpMock = require('node-mocks-http');
var home = require('../routes/home');

describe('home router', function () {
  it('index responds with an ok message', function () {
    var res = httpMock.createResponse();
    home['/'][0].handler(null, res);
    var data = JSON.parse(res._getData());
    expect(res.statusCode).to.eql(200);
    expect(data).to.be.an.instanceof(Object);
    expect(data).to.have.property('ok', true);
  });
});
