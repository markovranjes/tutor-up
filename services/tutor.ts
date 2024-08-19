import { connection } from "../database";

export const getAllTutors = (callback) => {
  const query = "SELECT * FROM tutor";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};

export const getTutor = (email, password, callback) => {
  const query = "SELECT * FROM tutor WHERE `e-mail` = ? AND `password` = ?";
  connection.query(query, [email, password], (error, results) => {
    callback(error, results[0]);
  });
};

export const createTutor = (tutor, callback) => {
  if (!connection) callback(new Error("Database connection error"), null);

  const query =
    "INSERT INTO tutor (name, surname, `e-mail`, password, phone, Program_id) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(
    query,
    [
      tutor.name,
      tutor.surname,
      tutor.email,
      tutor.password,
      tutor.phone,
      tutor.programId,
    ],
    callback
  );
};
