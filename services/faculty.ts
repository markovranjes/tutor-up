import { connection } from "../database";

export const getAllFaculties = (callback) => {
  const query = "SELECT * FROM faculty";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
