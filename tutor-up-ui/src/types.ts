export interface Faculty {
  id: number;
  name: string;
  university: University;
}

export interface University {
  id: number;
  name: string;
  city: string;
}

export interface Program {
  id: number;
  name: string;
  faculty: Faculty;
}

export interface Tutor {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  programId: number;
}

export interface Student {
  id: number;
  name: string;
  surname: string;
  password: string;
  email: string;
  programId: number;
}

export interface Subject {
  id: number;
  n_subject: string;
  program?: Program;
  program_id: number;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  location: "online" | "live";
  date: string;
  price: number;
  tutor: Tutor;
  subject: Subject;
}

export interface Request {
  id: number;
  accepted: boolean;
  student: Student;
  offer: Offer;
}

export interface RequestPayload {
  accepted: boolean;
  studentId: number;
  offerId: number;
}
