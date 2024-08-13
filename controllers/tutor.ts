import { getAllTutors } from "../services/tutor";

export const getAllTutorsController = (req, res) => {
  getAllTutors((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
