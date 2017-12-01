var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
/**
 * 引入自定义router
 * @type {router|exports}
 */
//var loginIntercepter = require('./intercepter/loginIntercepter');

var control = require('./routes/web/control');







var app = express();
// 设置  view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 设置 favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'close.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use("/static",express.static(path.join(__dirname, 'public')));

// 设置 Session
//app.use("/",session({
//    store: new RedisStore({
//        host:"120.55.44.163",
//        port: 6379,
//        db:1,
//        pass:"132321"
//    }),
//    secret: '12345',
//    name: 'session_id',
//    cookie: {maxAge: null},
//    resave: false,
//    saveUninitialized: true
//}));
//用户登陆拦截
//app.use("/miaolie/*",loginIntercepter);

//控件页面
app.use('/', control);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //next(err);
   res.render('error/404',
        {	title:	'404'

        }
    );
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log(err)
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
