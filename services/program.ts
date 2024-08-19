import { connection } from "../database";

export const getAllPrograms = (callback) => {
  const query =
    "SELECT p.id, p.name, f.id as faculty_id, f.name as faculty_name, u.name as university_name, u.id as university_id, u.city as university_city FROM program p INNER JOIN faculty f ON p.Faculty_id = f.id INNER JOIN university u ON f.University_id = u.id";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
