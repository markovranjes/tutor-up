import { getAllSubjects } from "../services/subject";

export const getAllSubjectsController = (req, res) => {
  getAllSubjects((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
