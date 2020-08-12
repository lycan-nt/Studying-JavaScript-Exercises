const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', function() {
    //Hooks
    beforeEach(function() {
        value = 0
    });

    it('Sum two numbers', function(done) {
        const math = new Math();

        this.timeout(3000);

        math.sum(5, 5, (value) => {
            expect(value).to.equal(10)
            done();
        });
        
    });

    it('Multiply two numbers', function() {
        const math = new Math();

        const obj = {
            name: 'Felipe D. Santos'
        }

        expect(obj).to.have.property('name').equal('Felipe D. Santos')

        // expect(math.multiply(value, 5)).to.equal(0);
    });

    it.only('Calls req with sum and index value', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };

        const math = new Math();

        math.printSum(req, res, 5, 5);
        
        expect(res.load.calledOnce).to.be.true;

        
    });
});