const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('config-lite')(__dirname);
const logger = require('morgan');
const handlebars = require('express3-handlebars');
const routes = require('./routes/router');

const app = express();

// 设置视图目录
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
const hbs = handlebars.create({
    partialsDir: 'views/partials',
    layoutsDir: "views/layouts/",
    defaultLayout: 'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    },
});
//设置模板引擎
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//设置session
app.use(session({
    name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
        maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
    }
}));

//设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

//判断用户是否登录
app.use(function(req,res,next){
    if(req.session.user || req.path==='/login'){
        res.locals.user = req.session.user;
        next();
    }else{
        res.redirect(303, '/login');
    }

});
//增加判断并标记测试条件的中间件
app.use(function(req, res, next){
    res.locals.isTest = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});

//路由
routes(app);

// 404
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误页
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(res.locals.error);
  // render the error page
  res.status(err.status || 500);
  if(err.status==404){
      res.render('404');
  }else{
      res.render('500',{error:res.locals.error});
  }

});

module.exports = app;
