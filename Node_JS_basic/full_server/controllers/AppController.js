export default class Appcontroller {
  static getHomepage(red, res) {
    res.status(200)
      .type('text')
      .send('Hello Holberton School!');
  }
}
