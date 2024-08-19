import {
  createRequest,
  getAllRequests,
  updateRequest,
} from "../services/request";

export const getAllRequestsController = (req, res) => {
  getAllRequests((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      const mapped = results.map(
        ({
          id,
          accepted,
          student_id,
          student_name,
          student_surname,
          offer_id,
          offer_title,
          tutor_id,
          tutor_name,
          tutor_surname,
          tutor_phone,
        }) => ({
          id,
          accepted,
          student: {
            id: student_id,
            name: student_name,
            surname: student_surname,
          },
          offer: {
            id: offer_id,
            title: offer_title,

            tutor: {
              id: tutor_id,
              name: tutor_name,
              surname: tutor_surname,
              phone: tutor_phone,
            },
          },
        })
      );
      res.status(200).json(mapped);
    }
  });
};

export const createRequestController = (req, res) => {
  const { accepted, studentId, offerId } = req.body;

  const request = {
    accepted,
    studentId,
    offerId,
  };

  createRequest(request, (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(201).json({ id: result.insertId, ...request });
    }
  });
};

export const updateRequestController = (req, res) => {
  const { accepted } = req.body;
  const { id } = req.params;

  const request = { id: +id, accepted };

  updateRequest(request, (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).send();
    }
  });
};
