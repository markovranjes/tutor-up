import { Offer } from "../types";
import { http } from "./http";

export const getAllOffers = () => {
  return http.get<Offer[]>("/offers");
};

export const createOffer = (offer: Omit<Offer, "id" | "tutor" | "subject">) => {
  return http.post("/offers", offer);
};
