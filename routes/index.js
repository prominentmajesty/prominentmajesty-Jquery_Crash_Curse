const express = require('express');
const Test = require('../models/test');

var router = express.Router();

router.get('/', (req, res)=>{
    res.render('home',{
        title : 'Home',
        styles : 'index.css',
        scripts : 'index.js'
    });
});

router.get('/ajax', (req, res)=>{
    Test.find({}, (err, doc)=>{
        if(err){
            return console.log(err);
        }
        res.status(200).send(doc);
    });
});

router.post('/post', (req, res)=>{
          let  data = {
              name : req.body.name,
              email : req.body.email,
              password : req.body.password
          }
    let test = new Test({
        name : data.name, 
        email : data.email,
        password : data.password
    });
    test.save().then((doc)=>{
        res.status(200).send(doc);
    }).catch((err)=>{
        console.log(err)
    });
})
module.exports = router