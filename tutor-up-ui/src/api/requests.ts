import { http } from "./http";
import { Request, RequestPayload } from "../types";

export const getAllRequests = () => {
  return http.get<Request[]>("/requests");
};

export const createRequest = (request: RequestPayload) => {
  return http.post("/requests", request);
};

export const acceptRequest = (id: number) => {
  return http.put(`/requests/${id}`, { accepted: true });
};
