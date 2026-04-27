const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create course
router.post('/', async (req, res) => {
  const { title, description, instructorId } = req.body;
  const course = await Course.create({ title, description, instructorId });
  res.json(course);
});

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.getAll();
  res.json(courses);
});

module.exports = router;
