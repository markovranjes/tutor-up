import { Student, Tutor } from "../types";
import { http } from "./http";

export const login = (email: string, password: string) => {
  return http.post<Student | Tutor>("/login", { email, password });
};
