module.exports = function (app) {
    const indexRouter = require('./index');
    const aboutRouter = require('./about');
    const usersRouter = require('./users');
    const headerRouter = require('./header');
    const sectionRouter = require('./section');
    const loginRouter = require('./login');

    app.use(['/','/index'], indexRouter);
    app.use('/about', aboutRouter);
    app.use('/users', usersRouter);
    app.use('/header', headerRouter);
    app.use('/section', sectionRouter);
    app.use('/login', loginRouter);
}