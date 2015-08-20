var expect = require('chai').expect;
var ztable = require('../');

describe('ztable', function() {

    before(function() {
        this.v1 = ztable(-3.49);
        this.v2 = ztable(3.49);
        this.v3 = ztable(1.621231);
        this.v4 = ztable(-0.95313);
        this.v5 = ztable(-3.556);
        this.v6 = ztable(0);
        this.v7 = ztable(6);
    });

    it('zscores match percentiles', function() {
        expect(this.v1).to.equal(0.0002);
        expect(this.v2).to.equal(0.9998);
        expect(this.v3).to.equal(0.9474);
        expect(this.v4).to.equal(0.1711);
        expect(this.v5).to.equal(0);
        expect(this.v6).to.equal(0.5);
        expect(this.v7).to.equal(1);
    });

});

