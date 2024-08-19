import { createTutor, getAllTutors } from "../services/tutor";
import { hashPassword } from "../utils";

export const getAllTutorsController = (req, res) => {
  getAllTutors((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};

export const createTutorController = async (req, res) => {
  const {
    name,
    surname,
    email,
    password: plain_password,
    phone,
    programId,
  } = req.body;

  const password = await hashPassword(plain_password);

  const tutor = {
    name,
    surname,
    email,
    password,
    phone,
    programId,
  };
  createTutor(tutor, (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      const { password: _password, ...data } = tutor;
      res.status(201).json({ id: result.insertId, ...data });
    }
  });
};
