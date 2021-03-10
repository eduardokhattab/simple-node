const customExpress = require('./config/customExpress');
const connection = require('./infra/db/connection')
const Tables = require('./infra/db/tables')

connection.connect((erro) => {
  if (erro) {
    console.log(erro)
  } else {
    const app = customExpress();
    
    Tables.init(connection)

    app.listen(8080, () => console.log('Working right'))
  }
})

