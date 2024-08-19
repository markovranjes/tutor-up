import { connection } from "../database";

export const getAllFaculties = (callback) => {
  const query =
    "SELECT f.id, f.name, u.id as university_id, u.name as university_name, u.city as university_city FROM faculty f JOIN university u ON  f.university_id = u.id;";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
