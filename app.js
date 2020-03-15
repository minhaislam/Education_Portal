//declaration
var express 		= require('express');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var expressValidator =require('express-validator');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');//var multer  = require('multer');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
//var home 			= require('./controllers/home');
var course          = require('./controllers/course');
var student          = require('./controllers/student');
var teacher         = require('./controllers/teacher');


 
//var app = express()

var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware

app.use('/abc', express.static('css'));
app.use('/abc', express.static('css'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/logout', logout);
app.use('/course', course);
app.use('/student', student);
app.use('/teacher', teacher);


//routes
app.get('/', function(req, res){
	res.render('index');
});



//server startup
app.listen(786, function(){
	console.log('server started at 786!');
});
