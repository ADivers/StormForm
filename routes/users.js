var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// // Register
// router.get('/register', function(req, res){
// 	res.render('register');
// });

// Login
router.get('/login', function(req, res){
	res.render('login');
});

// Register User
router.post('/register', function(req, res){

	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){

		res.send({isSuccessful: false, errors:errors, hasErrors:true})
	} else {
		var newUser = new User({
			name: name,
			email:email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		res.send({isSuccessful: true, success_msg:'You are registered and can now login', hasSuccess:true});
	}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
		console.log("strategizing!");
   User.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User', isSuccessful: false});
	}
		 
		 console.log(user);

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
				 console.log("match");
   			return done(null, user);
   		} else {
				console.log("no match");
   			return done(null, false, {message: 'Invalid password', isSuccessful: false});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
			console.log('post was hit');
			console.log(err);
			console.log(user);
			console.log(info);
			if(!user)
				res.send({message: info.message, isSuccessful: false});
			else
			res.send({name: user.name, username: user.username, email: user.email, isSuccessful: true});
		})(req, res, next);
	});

	// app.get('/login', function(req, res, next) {
	// 	passport.authenticate('local', function(err, user, info) {
	// 	  if (err) { return next(err); }
	// 	  if (!user) { return res.redirect('/login'); }
	// 	  req.logIn(user, function(err) {
	// 		if (err) { return next(err); }
	// 		return res.redirect('/users/' + user.username);
	// 	  });
	// 	})(req, res, next);
	//   });

router.get('/logout', function(req, res){
	req.logout();
	console.log("login out");
	res.send({logout:true});
});

module.exports = router;