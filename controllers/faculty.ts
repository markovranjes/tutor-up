import { getAllFaculties } from "../services/faculty";

export const getAllFacultiesController = (req, res) => {
  getAllFaculties((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
