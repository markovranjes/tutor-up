import mysql from "mysql";
import { config } from "dotenv";

config();

const host = process.env.DB_HOST;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const port = +(process.env.DB_PORT || 3306);

export const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
  port,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting to database: " + err.stack);
    return;
  }

  console.log("connected to database as id " + connection.threadId);
});

process.on("SIGINT", async () => {
  console.log("Closing MySQL connection due to application termination...");
  await connection.end();
  console.log("MySQL connection closed.");
  process.exit(0);
});

process.on("exit", async () => {
  console.log("Application is exiting, closing MySQL connection...");
  await connection.end();
  console.log("MySQL connection closed.");
});
