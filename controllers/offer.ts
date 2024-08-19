import { createOffer, getAllOffers } from "../services/offer";

export const getAllOffersController = (req, res) => {
  getAllOffers((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      const mapped = results.map(
        ({
          id,
          title,
          description,
          location,
          date,
          price,
          tutor_id,
          tutor_name,
          tutor_surname,
          subject_id,
          subject_n_subject,
          program_id,
        }) => ({
          id,
          title,
          description,
          location,
          date,
          price,
          tutor: {
            id: tutor_id,
            name: tutor_name,
            surname: tutor_surname,
          },
          subject: {
            id: subject_id,
            name: subject_n_subject,
            program_id,
          },
        })
      );
      res.status(200).json(mapped);
    }
  });
};

export const createOfferController = (req, res) => {
  const { title, description, location, date, price, tutorId, subjectId } =
    req.body;

  const offer = {
    title,
    description,
    location,
    date,
    price,
    tutorId,
    subjectId,
  };

  createOffer(offer, (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(201).json({ id: result.insertId, ...offer });
    }
  });
};
