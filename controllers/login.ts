import { Response } from "express";
import { getStudent } from "../services/student";
import { getTutor } from "../services/tutor";
import { hashPassword } from "../utils";

export const loginController = async (req, res: Response) => {
  const { email, password: plain_password } = req.body;

  const password = await hashPassword(plain_password);

  getStudent(email, password, (error, student) => {
    if (error) {
      console.error("Error getting student:", { error });
      return res.status(500).json({ error: error.message });
    }

    if (student) {
      const { password: _password, ...data } = student;
      return res.json({ student: data });
    } else {
      getTutor(email, password, (error, tutor) => {
        if (error) {
          console.error("Error getting tutor:", error);
          return res.status(500).json({ error: error.message });
        }

        if (tutor) {
          const { password: _password, ...data } = tutor;
          return res.status(200).json({ tutor: data });
        } else {
          return res.status(404).send();
        }
      });
    }
  });
};
