import { createStudent, getAllStudents } from "../services/student";
import { hashPassword } from "../utils";

export const getAllStudentsController = (req, res) => {
  getAllStudents((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};

export const createStudentController = async (req, res) => {
  const {
    name,
    surname,
    email,
    password: plain_password,
    phone,
    programId,
  } = req.body;

  const password = await hashPassword(plain_password);

  const student = {
    name,
    surname,
    email,
    password,
    phone,
    programId,
  };
  createStudent(student, (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(201).json({ id: result.insertId, ...student });
    }
  });
};
