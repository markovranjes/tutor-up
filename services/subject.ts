import { connection } from "../database";

export const getAllSubjects = (callback) => {
  const query = "SELECT * FROM subject";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
