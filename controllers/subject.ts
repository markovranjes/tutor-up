import { getAllSubjects } from "../services/subject";

export const getAllSubjectsController = (req, res) => {
  getAllSubjects((error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      const mapped = results.map(
        ({
          id,
          n_subject,
          program_id,
          program_name,
          faculty_id,
          faculty_name,
          university_id,
          university_name,
          university_city,
        }) => ({
          id,
          n_subject,
          program: {
            id: program_id,
            name: program_name,
            faculty: {
              id: faculty_id,
              name: faculty_name,
              university: {
                id: university_id,
                name: university_name,
                city: university_city,
              },
            },
          },
        })
      );
      res.status(200).json(mapped);
    }
  });
};
