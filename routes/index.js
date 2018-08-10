const express = require('express');
const router = express.Router();
const util = require('../lib/util.js');

const data = {
    currency: {
        name: 'United States dollars',
        abbrev: 'USD',
    },
    tours: [
        { name: 'Hood River', price: '$99.95' },
        { name: 'Oregon Coast', price:'$159.95' },
    ],
    specialsUrl: '/january-specials',
    currencies: [ 'USD', 'GBP', 'BTC' ],
}

/* GET home page. */
router.get(['/','/index'], function(req, res, next) {
    res.render('index', { title: 'index',fortune:util.getFortune() ,data:data,pageTestScript: '/qa/tests-about.js' });
});

module.exports = router;
