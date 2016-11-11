var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Users = mongoose.model('User');

router.get('/login', function (req, res, next) {
    res.render('app/auth/login',
        {
            title: "Work Tasks"
        }
    );
});

router.get('/signup', function (req, res, next) {
    res.render('app/auth/signup',
        {
            title: "Work Tasks"
        }
    );
});

// GET - list users
router.get('/users', function(req, res, next) {
    Users.find(function (err, users) {
        if(err) { return next(err)}
        res.json(users);
    });
});



module.exports = router;