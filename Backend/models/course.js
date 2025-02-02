const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  filePath: String,
  ytLink: String,
});

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    enum: ["CSE"],
    required: true,
  },
  sem: {
    type: Number,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  resources: [resourceSchema],
  // youtubeLink: {
  //   url: [
  //     {
  //       type: String,
  //     },
  //   ],
  // },
  // pastYearQuestions: {
  //   year: {
  //     type: Number,
  //   },
  //   pyqFile: {
  //     type: String,
  //   },
  // },
  // files: {
  //   fileUrl: {
  //     type: String,
  //   },
  //   fileType: {
  //     type: String,
  //     enum: ["PDF", "PPT"],
  //   },
  // },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
