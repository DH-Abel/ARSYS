import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { mySchema } from './schema';
import Task from './Task';

// Inicializar el adaptador SQLite
const adapter = new SQLiteAdapter({
  schema: mySchema,
});

// Crear la base de datos
export const database = new Database({
  adapter,
  modelClasses: [Task],
  actionsEnabled: true, // Permitir acciones
});
