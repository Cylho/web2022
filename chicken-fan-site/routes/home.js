const express = require('express');
const router = express.Router();
const linksForHome = 
[ {url: 'https://www.youtube.com/watch?v=XwqO3-gggqU' , text : 'How to cook a chicken'},
{ url: 'https://www.youtube.com/watch?v=lKZTkb-aAJ8', text : 'Chicken trololo'}];

router.get('/about',  (req, res) => {
    res.render('about');
});

router.get('/contact',  (req, res) => {
    res.render('contact');
});

// router.get('/', function (req, res) {
//     res.render('home');
// });

/*  router.get('/',  (req, res) => {
    res.cookie ('tracking', 'Look a cookie');
    res.render('home');
});*/

/*router.get('/',  (req, res) => {

    var message = "";
     
    if (req.cookies.tracking){
        var message = "Welcome back";
    }

    res.cookie ('tracking', true);
    res.render('home', {'message': message});
});*/

/*router.get('/',  (req, res) => {

    var message = "";
     
    if (req.cookies.tracking){
        var dateLastVisit = req.cookies.tracking;
        var message = "Welcome back, you last visited on :" + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toUTCString());

    res.render('home', {'message': message});
});*/

/*router.get('/',  (req, res) => {

    var message = "";
     
    if (req.signedCookies.tracking){
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toDateString(), {signed : true});
});*/

/*router.get('/',  (req, res) => {

    var message = "";
     
    if (req.cookies.tracking){
        var dateLastVisit = req.cookies.tracking;
        var message = "Welcome back, you last visited on :" + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toUTCString());

    res.render('home', {'message': message});
});*/

router.get('/',  (req, res) => {

    

    var message = "";
     
    if (req.signedCookies.tracking){
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toDateString(), {signed : true});

    res.render('home', {'message': message, links : linksForHome});

    res.render('home', {'message': message});
});


module.exports = router;