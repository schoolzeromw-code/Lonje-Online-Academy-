const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Student dashboard
router.get('/student/:studentId', async (req, res) => {
  const studentId = req.params.studentId;

  const coursesRes = await pool.query(
    `SELECT c.id, c.title FROM courses c
     JOIN enrollments e ON c.id = e.course_id
     WHERE e.student_id=$1`, [studentId]
  );

  const assignmentsRes = await pool.query(
    `SELECT a.id, a.title, a.course_id, s.grade
     FROM assignments a
     LEFT JOIN submissions s ON a.id=s.assignment_id AND s.student_id=$1`, [studentId]
  );

  res.json({ courses: coursesRes.rows, assignments: assignmentsRes.rows });
});

// Teacher dashboard
router.get('/teacher/:teacherId', async (req, res) => {
  const teacherId = req.params.teacherId;
  const coursesRes = await pool.query('SELECT * FROM courses WHERE instructor_id=$1', [teacherId]);
  const assignmentsRes = await pool.query(
    `SELECT a.id, a.title, a.course_id FROM assignments a
     JOIN courses c ON a.course_id=c.id WHERE c.instructor_id=$1`, [teacherId]
  );
  res.json({ courses: coursesRes.rows, assignments: assignmentsRes.rows });
});

module.exports = router;
