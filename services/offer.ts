import { connection } from "../database";

export const getAllOffers = (callback) => {
  const query = "SELECT * FROM offer";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
