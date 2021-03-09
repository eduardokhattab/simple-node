module.exports = (app) => {
  app.get('/attendances', (req, res) => {
    res.send("Server running");
  })

  app.post('/attendances', (req, res) => {
    req
    
    res.send("Ok");
  })
}
