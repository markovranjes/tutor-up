import { connection } from "../database";

export const getAllUniversities = (callback) => {
  const query = "SELECT * FROM university";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
