var express = require('express');
var router = express.Router();

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


module.exports = router;