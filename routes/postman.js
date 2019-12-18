const express = require('express');
const Test = require('../models/test');

var router = express.Router();
router.post('/postman', (req, res)=>{
    let object = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    
    var test = new Test({
        name : object.name,
        email : object.email,
        password : object.password
    });

    test.save().then((results)=>{
        console.log(results);
        res.status(200).send(results)

    }).catch((err)=>{
        console.log(`Error : ${err}`);
    });
});

router.post('/post/:id', (req, res)=>{
    
      let object = req.params.id;

    Test.findById({_id : object}, (err, results)=>{
        if(err){
            console.log(err);
            return res.status(404).send(err);
        }
        res.status(200).send(results)
    });
});
module.exports = router
