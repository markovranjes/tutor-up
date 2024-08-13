import { getAllStudents } from "../services/student";

export const getAllStudentsController = (req, res) => {
  getAllStudents((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
