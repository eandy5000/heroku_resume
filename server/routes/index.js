var express = require('express');
var router = express.Router();
var path = require('path');

router.route("/data")
    .get(function(req, res){
    res.send("hello");
})

router.get("/*", function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public/assets/views", file));
    console.log(req.params[0]);
});

//router.get("/*", function(req, res){
//    var file = req.params[0] || "resume3.css";
//    console.log("req.params[0] ",req.params[0]);
//    res.sendFile(path.join(__dirname, "../public/assets/styles", file));
//
//});

module.exports = router;