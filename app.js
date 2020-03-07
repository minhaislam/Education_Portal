//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var AdminHome 		= require('./controllers/AdminHome');
var insert 		= require('./controllers/insert');
var insert1 		= require('./controllers/insert1');
var insert2 		= require('./controllers/insert2');


var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/CSS', express.static('CSS'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/logout', logout);
app.use('/AdminHome', AdminHome);
app.use('/AdminHome', insert);
app.use('/AdminHome', insert1);
app.use('/AdminHome', insert2);


//routes
app.get('/', function(req, res){
	res.render('index');
});



//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
