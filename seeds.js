var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
    
var data =[
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Lorem ipsum dolor sit amet dui. Ut lobortis cursus consequat, orci luctus et ligula. Vivamus nonummy auctor est, viverra diam magna in turpis metus bibendum arcu id lectus. Ut tincidunt congue. Integer leo semper nec, molestie nec, hendrerit nibh malesuada fames ac ornare mi vitae orci. Morbi vitae massa at magna. Donec eleifend tincidunt, tempor vel, sapien. Cras rhoncus nunc, ac nunc faucibus orci ac purus. Praesent in faucibus eu, cursus ante. Praesent gravida gravida at, tellus. Quisque ornare elementum orci luctus et nunc felis, eleifend placerat. Duis quis neque. Cras lacus rhoncus aliquam risus ornare ultrices posuere vitae, dolor. Donec odio urna, pellentesque at, tellus. Nulla hendrerit metus a nunc. Vivamus magna. Vestibulum vel ipsum ullamcorper at, consequat non, leo. Cras suscipit, risus elit arcu, dapibus augue sed lorem sit amet mi quam, ultrices posuere ante ipsum aliquet malesuada, arcu nec erat in faucibus orci id risus. Donec in ornare id, adipiscing sapien magna lorem nec mauris viverra auctor, ante ipsum pharetra lobortis mauris non nulla. Duis a ante ipsum ante, luctus eget, vestibulum ipsum pharetra leo. Cras vitae."
    },
    {
        name: "Cosik 222",
        image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
        description: "Lorem ipsum dolor sit amet dui. Ut lobortis cursus consequat, orci luctus et ligula. Vivamus nonummy auctor est, viverra diam magna in turpis metus bibendum arcu id lectus. Ut tincidunt congue. Integer leo semper nec, molestie nec, hendrerit nibh malesuada fames ac ornare mi vitae orci. Morbi vitae massa at magna. Donec eleifend tincidunt, tempor vel, sapien. Cras rhoncus nunc, ac nunc faucibus orci ac purus. Praesent in faucibus eu, cursus ante. Praesent gravida gravida at, tellus. Quisque ornare elementum orci luctus et nunc felis, eleifend placerat. Duis quis neque. Cras lacus rhoncus aliquam risus ornare ultrices posuere vitae, dolor. Donec odio urna, pellentesque at, tellus. Nulla hendrerit metus a nunc. Vivamus magna. Vestibulum vel ipsum ullamcorper at, consequat non, leo. Cras suscipit, risus elit arcu, dapibus augue sed lorem sit amet mi quam, ultrices posuere ante ipsum aliquet malesuada, arcu nec erat in faucibus orci id risus. Donec in ornare id, adipiscing sapien magna lorem nec mauris viverra auctor, ante ipsum pharetra lobortis mauris non nulla. Duis a ante ipsum ante, luctus eget, vestibulum ipsum pharetra leo. Cras vitae."
    },
    {
        name: "Cosik 3333",
        image: "https://farm7.staticflickr.com/6089/6094103869_d53a990c83.jpg",
        description: "Lorem ipsum dolor sit amet dui. Ut lobortis cursus consequat, orci luctus et ligula. Vivamus nonummy auctor est, viverra diam magna in turpis metus bibendum arcu id lectus. Ut tincidunt congue. Integer leo semper nec, molestie nec, hendrerit nibh malesuada fames ac ornare mi vitae orci. Morbi vitae massa at magna. Donec eleifend tincidunt, tempor vel, sapien. Cras rhoncus nunc, ac nunc faucibus orci ac purus. Praesent in faucibus eu, cursus ante. Praesent gravida gravida at, tellus. Quisque ornare elementum orci luctus et nunc felis, eleifend placerat. Duis quis neque. Cras lacus rhoncus aliquam risus ornare ultrices posuere vitae, dolor. Donec odio urna, pellentesque at, tellus. Nulla hendrerit metus a nunc. Vivamus magna. Vestibulum vel ipsum ullamcorper at, consequat non, leo. Cras suscipit, risus elit arcu, dapibus augue sed lorem sit amet mi quam, ultrices posuere ante ipsum aliquet malesuada, arcu nec erat in faucibus orci id risus. Donec."
    }    
];  
    
function seedDB(){
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);        
        }else{
            console.log("removed campground!");   
            // data.forEach(function(seed){
            //     Campground.create(seed, function(err, campground){
            //         if (err) {
            //             console.log(err);
            //         }else{
            //             console.log("added a campground");
            //             //created a comment
            //             Comment.create(
            //                 {
            //                     text:"asd comment 1",
            //                     author: "author 111"
            //                 }, function(err, comment){
            //                     if (err) {
            //                         console.log(err);
            //                     }else{
            //                         campground.comments.push(comment);
            //                         campground.save();
            //                         console.log("created new comment");
            //                     }
            //             });
            //         }
            //     });
            // })
        }
    })
}    

module.exports = seedDB;
    
