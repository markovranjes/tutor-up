import { getAllPrograms } from "../services/program";

export const getAllProgramsController = (req, res) => {
  getAllPrograms((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
