const Post = require('../models/post');
const cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'drxxvydxk', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
	asyncMiddleware: fn =>
	  (req, res, next) => {
	    Promise.resolve(fn(req, res, next))
	      .catch(next);
		},
	isLoggedIn: (req, res, next) => {
	    if (req.isAuthenticated()) return next();
	    if (req.xhr) {
	    	return res.json({'loginError': true});
	    }
	    req.session.redirectTo = req.originalUrl;
		  req.flash('error', 'You need to be logged in to do that!');
	    res.redirect('/login');
	},
	sanitizeBody: (req, res, next) => {
		if (req.body.post.description) {
			req.body.post.description = req.sanitize(req.body.post.description);
		}
		next();
	},
	checkPostOwner: async (req, res, next) => {
		try {
				let post = await Post.findById(req.params.id);
				if (!post.author._id.equals(req.user._id)) {
					console.log(req.user.local.username);
					req.flash('error', 'You\'re not the owner of this post.');
					return res.redirect('/');
				}
				req.post = post;
				next();
		} catch(err) {
				return next(err);
		}
	},
	findLocation: function(req, res, next) {  
	  var limit = req.query.limit || 10;
	  var maxDistance = req.query.distance || 8;
	  maxDistance /= 6371;

	  var coords = [];
	  coords[0] = req.query.longitude;
	  coords[1] = req.query.latitude;

	  Post.find({
	    coordinates: {
	      $near: coords,
	      $maxDistance: maxDistance
	    }
	  }).limit(limit).exec(function(err, posts) {
	    if (err) {
	      return res.json(500, err);
	    }
	    res.json(200, posts);
	  });
	}
}