const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Course average grades
router.get('/teacher/:teacherId', async (req, res) => {
  const teacherId = req.params.teacherId;
  const result = await pool.query(
    `SELECT c.title AS course, AVG(CAST(s.grade AS NUMERIC)) AS average_grade
     FROM courses c
     LEFT JOIN assignments a ON a.course_id=c.id
     LEFT JOIN submissions s ON s.assignment_id=a.id
     WHERE c.instructor_id=$1
     GROUP BY c.title`, [teacherId]
  );
  res.json(result.rows);
});

// Assignment-level analytics
router.get('/teacher/:teacherId/assignments', async (req, res) => {
  const teacherId = req.params.teacherId;
  const result = await pool.query(
    `SELECT a.id AS assignment_id, a.title AS assignment_title, c.title AS course,
            s.student_id, s.grade
     FROM assignments a
     JOIN courses c ON a.course_id=c.id
     LEFT JOIN submissions s ON s.assignment_id=a.id
     WHERE c.instructor_id=$1 ORDER BY c.title, a.id, s.student_id`, [teacherId]
  );
  res.json(result.rows);
});

module.exports = router;
