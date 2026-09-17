/**
 * Service métier pour les tâches — facilement testable en isolation
 */

const VALID_STATUSES = ['todo', 'in-progress', 'done'];

function validateTask(task) {
  const errors = [];
  if (!task.title || task.title.trim() === '')
    errors.push('Le titre est requis');
  if (task.title && task.title.length > 200)
    errors.push('Le titre ne doit pas dépasser 200 caractères');
  if (task.status && !VALID_STATUSES.includes(task.status))
    errors.push(`Statut invalide. Valeurs acceptées : ${VALID_STATUSES.join(', ')}`);
  return errors;
}

function formatTask(raw) {
  return {
    id:        raw.id,
    title:     raw.title.trim(),
    status:    raw.status || 'todo',
    createdAt: raw.created_at,
  };
}

module.exports = { validateTask, formatTask, VALID_STATUSES };
