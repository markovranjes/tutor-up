import { connection } from "../database";

export const getAllPrograms = (callback) => {
  const query = "SELECT * FROM program";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
