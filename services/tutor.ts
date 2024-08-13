import { connection } from "../database";

export const getAllTutors = (callback) => {
  const query = "SELECT * FROM tutor";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
