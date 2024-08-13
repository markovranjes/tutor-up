import { connection } from "../database";

export const getAllStudies = (callback) => {
  const query = "SELECT * FROM study";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
