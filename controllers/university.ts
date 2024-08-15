import { getAllUniversities } from "../services/university";

export const getAllUniversitiesController = (req, res) => {
  getAllUniversities((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
