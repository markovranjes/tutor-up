import { getAllFaculties } from "../services/faculty";

export const getAllFacultiesController = (req, res) => {
  getAllFaculties((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      const mapped = results.map(
        ({ id, name, university_id, university_name, university_city }) => ({
          id,
          name,
          university: {
            id: university_id,
            name: university_name,
            city: university_city,
          },
        })
      );
      res.status(200).json(mapped);
    }
  });
};
