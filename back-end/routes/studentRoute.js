// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../model/studentSubmission');

// Get all students
router.get('/submissions', async (req, res) => {
  try {   
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new student



router.post('/newsubmission', async (req, res) => {
  try {
    const student = new Student({
      Name: req.body.Name,
      Batch: req.body.Batch,
      Email: req.body.Email,
      SubmissionLink: req.body.SubmissionLink
    });
      let submissionInfo = await Student(student).save();
      console.log(submissionInfo);
      res.status(200).send({ message: "Data added" });
  } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error adding data" });
  }
});

// Update evaluation status
router.patch('evaluate/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Student not found' });
    }
    student.evaluationStatus = req.body.evaluationStatus;
    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
