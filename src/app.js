require('dotenv').config();
const express = require('express');
const app     = express();

app.use(express.json());
app.use('/api/tasks', require('./routes/tasks'));
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3000;
if (require.main === module)
  app.listen(PORT, () => console.log(`🚀  API sur :${PORT}`));

module.exports = app;
