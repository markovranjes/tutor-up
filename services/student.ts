import { connection } from "../database";

export const getAllStudents = (callback) => {
  const query = "SELECT * FROM student";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};

export const getStudent = (email, password, callback) => {
  const query = "SELECT * FROM student WHERE `e-mail` = ? AND `password` = ?";
  connection.query(query, [email, password], (error, results) => {
    callback(error, results[0]);
  });
};

export const createStudent = (student, callback) => {
  if (!connection) callback(new Error("Database connection error"), null);

  const query =
    "INSERT INTO student (name, surname, `e-mail`, password, Program_id) VALUES (?, ?, ?, ?, ?)";
  connection.query(
    query,
    [
      student.name,
      student.surname,
      student.email,
      student.password,
      student.programId,
    ],
    callback
  );
};
