import { University } from "../types";
import { http } from "./http";

export const getAllUniversities = () => {
  return http.get<University[]>("/universities");
};
