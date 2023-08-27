const mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema({
    CourseName: {
        type: String,
        required: "Required"
    },
    CourseId: {
        type: String
    },
    CourseDuration: {
        type: String,
    },
    CourseFee: {
        type: String
    }
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;