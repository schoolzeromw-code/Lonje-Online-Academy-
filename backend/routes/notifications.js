const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Send notification
router.post('/', async (req, res) => {
  const { userId, message } = req.body;
  const io = req.app.get('io');
  const result = await pool.query(
    'INSERT INTO notifications (user_id,message) VALUES ($1,$2) RETURNING *', [userId, message]
  );
  io.emit(`notification:${userId}`, result.rows[0]);
  res.json(result.rows[0]);
});

module.exports = router;
