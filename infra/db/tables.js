class Tables {
  init(connection) {
    this.connection = connection

    this.createAttendance();
  }

  createAttendance() {
    const sql = 'CREATE TABLE IF NOT EXISTS attendances (id int NOT NULL AUTO_INCREMENT, customer varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, ps text, PRIMARY KEY(id))'

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tudo certo");
      }
    })
  }
}

module.exports = new Tables
