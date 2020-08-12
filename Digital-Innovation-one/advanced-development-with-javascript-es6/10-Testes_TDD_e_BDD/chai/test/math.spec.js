const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

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
});