var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST - add new user */
router.post('/new', function(req, res, next) {
  var user = new Users(req.body);
  user.save(function (err, user) {
    if(err)
    {
      req.flash('success', err);
      res.redirect('/auth/signup');
    } else {
      req.flash('success', 'Successfully registered!');
      res.redirect('/auth/login');
    }

  })
});
module.exports = router;
