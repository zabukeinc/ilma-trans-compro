var co = require('co')
var koa = require('koa')
var path = require('path')
var auth = require('koa-basic-auth')

var request = require('..')

describe('auth', function () {
  var app = koa()

  app.use(auth({
    name: 'name',
    pass: 'pass'
  }))

  app.use(function* () {
    this.status = 204
  })

  var uri = 'http://localhost:'

  it('server should start', function (done) {
    app.listen(function (err) {
      if (err) return done(err)
      uri += this.address().port
      done()
    })
  })

  it('should work when passing .auth', co(function* () {
    var res = yield* request(uri, {
      auth: 'name:pass'
    })
    res.statusCode.should.equal(204)
  }))

  it('should work with netrc', co(function* () {
    var res = yield* request(uri, {
      netrc: path.join(__dirname, '.netrc')
    })
    res.statusCode.should.equal(204)
  }))

  it('should work with netrc as extension', co(function* () {
    var req = request.extend({
      netrc: path.join(__dirname, '.netrc')
    })
    var res = yield* req(uri)
    res.statusCode.should.equal(204)
  }))
})
