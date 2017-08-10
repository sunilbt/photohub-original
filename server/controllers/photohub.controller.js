var express = require('express');
var path = require('path');
var router = express.Router();

//serve photohub front end files from root path '/'
router.use('/', express.static('../client/photohub', { redirect: false }));

//rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function(req, res, next){
    res.sendFile(path.resolve('../client/photohub/index.html'));
});

module.exports = router;