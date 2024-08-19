import { connection } from "../database";

export const getAllOffers = (callback) => {
  const query =
    "SELECT o.id, o.title, o.description, o.location, o.date, o.price, t.id as tutor_id, t.name as tutor_name, t.surname as tutor_surname, s.id as subject_id, s.n_subject as subject_n_subject, s.Program_id as program_id FROM offer o INNER JOIN tutor t ON o.Tutor_id=t.id INNER JOIN subject s ON o.Subject_id = s.id";
  if (!connection) callback(new Error("Database connection error"), null);

  connection.query(query, callback);
};

export const createOffer = (offer, callback) => {
  if (!connection) callback(new Error("Database connection error"), null);

  const query =
    "INSERT INTO offer ( title, location, description, date, price,Tutor_id, Subject_Id) VALUES (?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    query,
    [
      offer.title,
      offer.location,
      offer.description,
      offer.date,
      offer.price,
      offer.tutorId,
      offer.subjectId,
    ],
    callback
  );
};
