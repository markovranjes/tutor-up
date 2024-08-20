import { Tutor } from "../types";
import { http } from "./http";

export const getAllTutors = () => {
  return http.get<Tutor[]>("/tutors");
};

export const createTutor = (tutor: Omit<Tutor, "id">) => {
  return http.post("/tutors", tutor);
};
