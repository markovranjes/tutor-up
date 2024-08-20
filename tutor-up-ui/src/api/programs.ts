import { Program } from "../types";
import { http } from "./http";

export const getAllPrograms = () => {
  return http.get<Program[]>("/programs");
};
