import { connection } from "../database";

export const getAllRequests = (callback) => {
  const query =
    "SELECT r.id, r.accepted, s.id as student_id, s.name as student_name, s.surname as student_surname, o.id as offer_id, o.title as offer_title FROM request r INNER JOIN student s ON r.Student_id=s.id INNER JOIN offer o ON r.Offer_id=r.id";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};

export const createRequest = (request, callback) => {
  if (!connection) callback(new Error("Database connection error"), null);

  const query =
    "INSERT INTO request ( accepted, Student_id, Offer_id) VALUES (?, ?, ?)";
  connection.query(
    query,
    [request.accepted, request.student_id, request.offer_id],
    callback
  );
};
