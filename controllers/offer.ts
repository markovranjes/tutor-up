import { getAllOffers } from "../services/offer";

export const getAllOffersController = (req, res) => {
  getAllOffers((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};
