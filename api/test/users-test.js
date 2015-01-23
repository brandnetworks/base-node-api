'use strict';

var chai = require('chai');
var expect = chai.expect;
var httpMock = require('node-mocks-http');
var users = require('../routes/users');

describe('users router', function () {
  it('index responds with a list of users', function () {
    var res = httpMock.createResponse();
    users['/'].handler(null, res);
    var data = JSON.parse(res._getData());
    expect(res.statusCode).to.eql(200);
    expect(data).to.be.an.instanceof(Object);
    expect(data.users).to.be.an.instanceof(Array);
    expect(data.users[0]).to.have.ownProperty('name');
  });
});
