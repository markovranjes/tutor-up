import { connection } from "../database";

export const getAllSubjects = (callback) => {
  const query =
    "SELECT s.id, s.n_subject, p.id as program_id, p.name as program_name, f.name as faculty_name, f.id as faculty_id, u.id as university_id, u.name as university_name, u.city as university_city FROM subject s INNER JOIN program p ON s.Program_id = p.id INNER JOIN faculty f ON p.Faculty_id = f.id INNER JOIN university u ON f.University_id = u.id";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};
