var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addJournal', { title: 'Studyflo | Go with your flo' });
});

module.exports = router;