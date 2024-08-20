import { Subject } from "../types";
import { http } from "./http";

export const getAllSubjects = () => {
  return http.get<Subject[]>("/subjects");
};
