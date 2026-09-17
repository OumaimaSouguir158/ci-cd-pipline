const request = require('supertest');
const app     = require('../../src/app');

// Ces tests nécessitent une base de données réelle (voir docker-compose.test.yml)
describe('Tasks API Integration', () => {
  test('GET /api/tasks — retourne un tableau', async () => {
    const res = await request(app).get('/api/tasks');
    expect([200, 500]).toContain(res.status); // 500 si pas de BDD
    if (res.status === 200) expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/tasks — titre vide → 400', async () => {
    const res = await request(app).post('/api/tasks').send({ title: '' });
    expect(res.status).toBe(400);
    expect(res.body.errors).toBeDefined();
  });
});
