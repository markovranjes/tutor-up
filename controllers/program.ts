import { getAllPrograms } from "../services/program";

export const getAllProgramsController = (req, res) => {
  getAllPrograms((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      const mapped = results.map(
        ({
          id,
          name,
          faculty_id,
          faculty_name,
          university_id,
          university_name,
          university_city,
        }) => ({
          id,
          name,
          faculty: {
            id: faculty_id,
            name: faculty_name,
            university: {
              id: university_id,
              name: university_name,
              city: university_city,
            },
          },
        })
      );
      res.status(200).json(mapped);
    }
  });
};
