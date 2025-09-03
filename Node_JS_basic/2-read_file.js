const fs = require('fs')

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf-8');
    const line = content.split('\n');
    const students = line.slice(1).filter(line => line.trim() !== '');
    const groups = {};

    for (const student of students) {
      const parts = student.split(',')
      const firstname = parts[0];
      const field = parts[3];

    if (!groups[field]) {
      groups[field] = [];
    }
    groups[field].push(firstname);
  }

  console.log(`Number of students: ${students.length}`);

  for (const field in groups) {
    console.log(
      `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`
    );
  }
} catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports =countStudents;
