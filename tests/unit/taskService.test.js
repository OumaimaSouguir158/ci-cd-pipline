const { validateTask, formatTask, VALID_STATUSES } = require('../../src/services/taskService');

describe('validateTask', () => {
  test('accepte une tâche valide', () => {
    expect(validateTask({ title: 'Ma tâche', status: 'todo' })).toHaveLength(0);
  });

  test('rejette un titre vide', () => {
    const errors = validateTask({ title: '' });
    expect(errors).toContain('Le titre est requis');
  });

  test('rejette un titre trop long', () => {
    const errors = validateTask({ title: 'a'.repeat(201) });
    expect(errors.some(e => e.includes('200'))).toBe(true);
  });

  test('rejette un statut invalide', () => {
    const errors = validateTask({ title: 'Task', status: 'invalid' });
    expect(errors.some(e => e.includes('Statut'))).toBe(true);
  });

  test('accepte tous les statuts valides', () => {
    VALID_STATUSES.forEach(status => {
      expect(validateTask({ title: 'T', status })).toHaveLength(0);
    });
  });
});

describe('formatTask', () => {
  test('formate correctement une tâche', () => {
    const raw = { id: 1, title: '  Ma tâche  ', status: 'todo', created_at: '2024-01-01' };
    const task = formatTask(raw);
    expect(task.title).toBe('Ma tâche'); // trim appliqué
    expect(task.id).toBe(1);
    expect(task.createdAt).toBeDefined();
  });
});
