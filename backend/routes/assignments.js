const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Assignment = require('../models/Assignment');

const storage = multer.diskStorage({
  destination: function(req, file, cb) { cb(null, 'uploads/'); },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Create assignment
router.post('/', async (req, res) => {
  const { courseId, title, description, dueDate } = req.body;
  const assignment = await Assignment.create({ courseId, title, description, dueDate });
  res.json(assignment);
});

// Submit text assignment
router.post('/:assignmentId/submit', async (req, res) => {
  const { studentId, content } = req.body;
  const submission = await Assignment.submit({ assignmentId: req.params.assignmentId, studentId, content });
  res.json(submission);
});

// Submit file assignment
router.post('/:assignmentId/submit-file', upload.single('file'), async (req, res) => {
  const { studentId } = req.body;
  const filePath = req.file.path;
  const submission = await Assignment.submit({ assignmentId: req.params.assignmentId, studentId, content: filePath });
  res.json(submission);
});

module.exports = router;
