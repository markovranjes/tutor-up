import { connection } from "../database";

export const getAllStudents = (callback) => {
  const query = "SELECT * FROM student";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
