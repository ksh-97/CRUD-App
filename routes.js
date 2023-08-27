const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Course = require("./schema");

router.get("/list", async (req, res) => {
    try{
        const data = await Course.find()
        res.render("list", { data: data })
        //res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

});


router.get("/add", (req, res) => {
    res.render("addcourse");

});

router.post("/add", (req, res) => {
    var course = new Course();
    course.CourseName = req.body.CourseName;
    course.CourseDuration = req.body.CourseDuration;
    course.CourseFee = req.body.CourseFee;
    course.CourseId = Math.ceil(Math.random() * 1000) + "";

    course.save()
        .then(result => {
            console.log(result)
            res.redirect("/course/list");
        })
        .catch((err) => {
            res.send("Error!! Could not add course");
        });

});

module.exports = router;