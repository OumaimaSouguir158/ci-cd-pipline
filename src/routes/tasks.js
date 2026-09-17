const router = require('express').Router();
const { Pool } = require('pg');
const { validateTask, formatTask } = require('../services/taskService');

const pool = new Pool({
  host: process.env.DB_HOST, database: process.env.DB_NAME,
  user: process.env.DB_USER, password: process.env.DB_PASSWORD,
});

router.get('/', async (_req, res) => {
  const r = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
  res.json(r.rows.map(formatTask));
});

router.post('/', async (req, res) => {
  const errors = validateTask(req.body);
  if (errors.length) return res.status(400).json({ errors });
  const { title, status = 'todo' } = req.body;
  const r = await pool.query('INSERT INTO tasks(title,status) VALUES($1,$2) RETURNING *', [title.trim(), status]);
  res.status(201).json(formatTask(r.rows[0]));
});

router.patch('/:id/status', async (req, res) => {
  const { status } = req.body;
  const errors = validateTask({ title: 'placeholder', status });
  if (errors.length) return res.status(400).json({ errors });
  const r = await pool.query('UPDATE tasks SET status=$1 WHERE id=$2 RETURNING *', [status, req.params.id]);
  r.rows[0] ? res.json(formatTask(r.rows[0])) : res.status(404).json({ error: 'Tâche non trouvée' });
});

module.exports = router;
