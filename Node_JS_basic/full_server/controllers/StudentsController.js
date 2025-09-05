import readDatabase from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];
    try {
      const groups = await readDatabase(filePath);

      const lines = ['This is the list of our students'];
      const fields = Object.keys(groups)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      for (const field of fields) {
        const list = groups[field];
        lines.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }

      res.status(200).type('text').send(lines.join('\n'));
    } catch (err) {
      res.status(500).type('text').send("Cannot load the database");
      return;
    }

  static async getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'cs' && major !== 'SWE') {
      res.status(500).type('text').send('Makor parameter must be CS or SWE');
      return;
    }

    try {
      const groups = await readDatabase(filePath);
      const list = groups[major] || [];
      res.status(200).type('text').send(`List: ${list.join(', ')}`)
    } catch (err) {
      res.status(500).type('text').send('Cannot load the databse');
    }
  }
}

