const express = require('express');
const router = express.Router();
//增加获取天气的中间件
const util = require('../lib/util.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weather = util.getWeatherData();
    res.render('about', { title: 'about',layout:'test' });
});

module.exports = router;