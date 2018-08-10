const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    // 我们会在后面学到 CSRF……目前，只提供一个虚拟值
    res.render('login', { csrf: 'CSRF token goes here' });
});

router.post('/', function(req, res){
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    //res.render('ok');
    const user = {
        username:req.body.name,
        email:req.body.email
    };
    req.session.user = user;
    //req.session.user = null; // 这会将 'userName' 设为 null
    //delete req.session.user; // 这会移除 'colorScheme'
    res.redirect(303, '/index');
});
module.exports = router;