import { Faculty } from "../types";
import { http } from "./http";

export const getAllFaculties = () => {
  return http.get<Faculty[]>("/faculties");
};
