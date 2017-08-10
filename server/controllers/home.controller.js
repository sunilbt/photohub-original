var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/', ensureAuthenticated);
//serve home front end files from '/home'
router.use('/', express.static('../client/home'));

module.exports = router;

/* MIDDLEWARE FUNCTIONS
---------------------------------------*/

function ensureAuthenticated(req, res, next) {
    // use session auth to secure the front end admin files
    if (!req.session.token) {
        return res.redirect('/login?returnUrl=' + encodeURIComponent('/home' + req.path));
    }

    next();
}