const connection = require('../infra/db/connection');

class Attendance {
  add(attendance, res) {
    const sql = 'INSERT INTO attendances SET ?'

    connection.query(sql, attendance, (error, results) => {
      if (error) {
        res.send(400).json(error)
      } else {
        res.status(201).json(results)
      }
    })
  }
}

module.exports = new Attendance
