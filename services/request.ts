import { connection } from "../database";

export const getAllRequests = (callback) => {
  const query =
    "SELECT DISTINCT r.id, r.accepted, s.id AS student_id, s.name AS student_name, s.surname AS student_surname, o.id AS offer_id, o.title AS offer_title, t.id AS tutor_id, t.name AS tutor_name, t.surname AS tutor_surname, t.phone AS tutor_phone FROM request r INNER JOIN student s ON r.Student_id = s.id INNER JOIN offer o ON r.Offer_id = o.id INNER JOIN tutor t ON o.Tutor_id = t.id";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};

export const createRequest = (request, callback) => {
  if (!connection) callback(new Error("Database connection error"), null);

  const query =
    "INSERT INTO request ( accepted, Student_id, Offer_id) VALUES (?, ?, ?)";
  connection.query(
    query,
    [request.accepted, request.studentId, request.offerId],
    callback
  );
};

export const updateRequest = (request, callback) => {
  if (!connection) callback(new Error("Database connection error"), null);

  const query = "UPDATE request SET accepted = ? where id = ?";
  connection.query(query, [request.accepted, request.id], callback);
};
