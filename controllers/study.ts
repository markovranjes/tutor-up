import { getAllStudies } from "../services/study";

export const getAllStudiesController = (req, res) => {
  getAllStudies((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
