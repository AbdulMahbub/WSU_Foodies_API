const { assert } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { PORT, PASSWORD, USER } = require('../db.config');
const dbConfig = require('../db.config');
let server = require('../db.config');

chai.should();
chai.use(chaiHttp);

describe('Port Number Correct?', function() {
        it("9301", function () {
            let result = PORT;
            assert.equal(result, '9301');
        });
    });

    describe('Password Correct?', function() {
        it("password", function () {
            let result = PASSWORD;
            assert.equal(result, 'password');
        });
    });

    describe('User Correct?', function() {
        it("root", function () {
            let result = USER;
            assert.equal(result, 'root');
        });
    });