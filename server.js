const express = require('express');
const flash = require('connect-flash');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const {db} = require('./database/db');
const mongoose = require('mongoose');
let expressValidator = require('express-validator');
const index = require('./routes/index');
const postman = require('./routes/postman');
var app = express();
var Port = 3000;
mongoose.connect(db, {
    useUnifiedTopology: true,useNewUrlParser: true
}, function(){
console.log('Data Base Connection Was Successful !!');
}); 
app.use(express.static('./public')); 
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: 'views/partials',
    helpers : {
        base64ArrayBuffer : require('./utils/base64ArrayBuffer')
    }
}));
app.set('view engine', '.hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 300000 
    }
}));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg'); 
    next();
  });
app.use('/', index);
app.use('/postman',postman);
app.listen(Port,()=>{
    console.log(`Server Started !!! Server Is Now Running On Port ${Port}`);
});
