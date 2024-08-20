import { Student } from "../types";
import { http } from "./http";

export const getAllStudents = () => {
  return http.get<Student[]>("/students");
};

export const createStudent = (student: Omit<Student, "id">) => {
  return http.post("/students", student);
};
