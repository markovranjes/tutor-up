import { getAllRequests } from "../services/request";

export const getAllRequestsController = (req, res) => {
  getAllRequests((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
