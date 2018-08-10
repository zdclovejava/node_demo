// var http = require('http');
//
// http.createServer(function(req,res){
//     // 规范化 url，去掉查询字符串、可选的反斜杠，并把它变成小写
//     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
//     switch(path) {
//         case '':
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('Homepage');
//             break;
//         case '/about':
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('About');
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found');
//             break;
//     }
// }).listen(3000);
//
// console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

// var http = require('http'),
//     fs = require('fs');
//
// function serveStaticFile(res, path, contentType, responseCode) {
//     if(!responseCode) responseCode = 200;
//     fs.readFile(__dirname + path, function(err,data) {
//         if(err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('500 - Internal Error');
//         } else {
//             res.writeHead(responseCode,
//                 { 'Content-Type': contentType });
//             res.end(data);
//         }
//     });
// }
//
// http.createServer(function(req,res){
//     // 规范化 url，去掉查询字符串、可选的反斜杠，并把它变成小写
//     var path = req.url.replace(/\/?(?:\?.*)?$/, '')
//         .toLowerCase();
//     switch(path) {
//         case '':
//             serveStaticFile(res, '/public/home.html', 'text/html');
//             break;
//         case '/about':
//             serveStaticFile(res, '/public/about.html', 'text/html');
//             break;
//         case '/img/logo.jpg':
//             serveStaticFile(res, '/public/img/wechat.jpeg',
//                 'image/jpeg');
//             break;
//         default:
//             serveStaticFile(res, '/public/404.html', 'text/html',
//                 404);
//             break;
//     }
// }).listen(3000);
//
// console.log('Server started on localhost:3000; press Ctrl-C to terminate....');


// var express = require('express');
// var app = express();
// //默认用main.handlebars座位模板页，路径为当前路径/views/layouts/main.handlebars
// var handlebars = require('express3-handlebars')
//     .create({ defaultLayout:'main' });
// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');
// var path = require('path');
// //设置静态资源目录
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('port', process.env.PORT || 3000);
//
// var fortunes = [
//     "Conquer your fears or they will conquer you.",
//     "Rivers need springs.",
//     "Do not fear what you don't know.",
//     "You will have a pleasant surprise.",
//     "Whenever possible, keep it simple.",
// ];
//
// app.get('/', function(req, res) {
//     res.render('home');
// });
// app.get('/about', function(req, res) {
//     res.render('about');
// });
//
// // 404 catch-all 处理器（中间件）
// app.use(function(req, res, next){
//     res.status(404);
//     res.render('404');
// });
//
// // 500 错误处理器（中间件）
// app.use(function(err, req, res, next){
//     console.error(err.stack);
//     res.status(500);
//     res.render('500');
// });
//
// app.listen(app.get('port'), function(){
//     console.log( 'Express started on http://localhost:' +
//         app.get('port') + '; press Ctrl-C to terminate.' );
// });


var app = require('express')();

app.use(function(req, res, next){
    console.log('\n\nALLWAYS');
    next();
});

app.get('/a', function(req, res){
    console.log('/a: 路由终止 ');
    res.send('a');
});
app.get('/a', function(req, res){
    console.log('/a: 永远不会调用 ');
});
app.get('/b', function(req, res, next){
    console.log('/b: 路由未终止 ');
    next();
});
app.use(function(req, res, next){
    console.log('SOMETIMES');
    next();
});
app.get('/b', function(req, res, next){
    console.log('/b (part 2): 抛出错误 ' );
    throw new Error('b 失败 ');
});

app.use('/b', function(err, req, res, next){
    console.log('/b 检测到错误并传递 ');
    next(err);
});
app.get('/c', function(err, req){
    console.log('/c: 抛出错误 ');
    throw new Error('c 失败 ');
});
app.use('/c', function(err, req, res, next){
    console.log('/c: 检测到错误但不传递 ');
    next();
});

app.use(function(err, req, res, next){
    console.log(' 检测到未处理的错误 : ' + err.message);
    res.send('500 - 服务器错误 ');
});

app.use(function(req, res){
    console.log(' 未处理的路由 ');
    res.send('404 - 未找到 ');
});

app.listen(3000, function(){
    console.log(' 监听端口 3000');
});