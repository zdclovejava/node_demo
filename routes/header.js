const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.set('Content-Type','text/plain');
    const s = '';
    for(const name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s);
});

module.exports = router;