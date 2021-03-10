const Attendance = require('../models/attendances');

module.exports = (app) => {
  app.get('/attendances', (req, res) => {
    res.send("Server running");
  })

  app.post('/attendances', (req, res) => {
    const attendanceBody = req.body

    Attendance.add(attendanceBody, res);
  })
}
