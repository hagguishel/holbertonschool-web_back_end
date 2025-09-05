import { promises as fs } from 'fs';

export default async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');

    const lines = data.split(/\r?\n/);
    const rows = lines
      .slice(1)
      .filter((l) => l.trim() !== '');

    const groups = {};

    for (const row of rows) {
      const cols = row.split(',');
      const firstname = cols[0].trim();
      const field = cols[cols.length - 1].trim();

      if (!groups[field]) groups[field] = [];
      groups[field].push(firstname);
    }

    return groups;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
