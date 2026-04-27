const pool = require('../config/db');

class Course {
  static async create({ title, description, instructorId }) {
    const res = await pool.query(
      'INSERT INTO courses (title,description,instructor_id) VALUES ($1,$2,$3) RETURNING *',
      [title, description, instructorId]
    );
    return res.rows[0];
  }
  static async getAll() {
    const res = await pool.query('SELECT * FROM courses');
    return res.rows;
  }
}

module.exports = Course;
