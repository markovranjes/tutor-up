import { connection } from "../database";

export const getAllRequests = (callback) => {
  const query = "SELECT * FROM request";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
