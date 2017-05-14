import x2d from './index'

describe('home', function () {
    it('pass a should return A', function () {
        x2d('a').should.equal('A')
    })
})