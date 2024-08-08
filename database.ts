import mysql from 'mysql';

let connection = null;

export  const dbConnect = () => {
  const host = process.env.DB_HOST;
  const user = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;
  const port = process.env.DB_PORT;

    var connection = mysql.createConnection({
        host,
        user,
        password,
        database,
        port
      });
      
      connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
      
        console.log('connected as id ' + connection.threadId);
      });
}

