var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get("/", function(req, res){
    Campground.find({},function(err, allCampgrounds){
        if (err) {
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }    
    });
});
//CREATE - add new campground
router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.name,
        description = req.body.description,
        image = req.body.imageUrl;
    
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    
    var newCampground = {
        name: name,
        image: image,
        description: description,
        author: author
    };
    
    Campground.create(newCampground, function(err, newlyCreared){
        if (err) {
            console.log(err);
        }else{
            console.log("New campground has created!");
            console.log(newlyCreared);
            res.redirect("/campgrounds");
        }
    });
});
//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});
// SHOW - shows more info about one campgound
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err) {
            console.log(err);
        }else{
            res.render("campgrounds/show", {campground: foundCampground});     
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err) {
            req.flash("error", "Campground not found.");
            res.redirect("/id");
        }else
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if (err) {
            req.flash("error", "Campground not found.");
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/" + updatedCampground._id);
        }
    });
});

// REMOVE CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, req.body.campground, function(err){
        if (err) {
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/");
        }
    });
});

module.exports = router;