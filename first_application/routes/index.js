var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
var places = [
{ name: 'Home', rating: 10 },
{ name: 'Nanas House', rating: 9 },
{ name: 'Austin Texas', rating: 5 },
{ name: 'New York City', rating: 6 },
{ name: 'Myrtle Beach', rating: 5 }
];
// create a name
var myname = "Colby McPherson";
res.render('index', {
title: 'Favorite Places',
places: places,
myname: myname
});
});
module.exports = router;