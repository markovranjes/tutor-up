import { useEffect, useState } from "react";
import { getAllOffers } from "../api/offers";
import { Course } from "../components/Course";
import { Offer } from "../types";
import { useNavigate } from "react-router-dom";

export const Courses = () => {
  const [offers, setOffers] = useState<Offer[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadOffers();
  }, []);

  const loadOffers = async () => {
    const response = await getAllOffers();
    setOffers(response.data);
  };
  const toAccepted = () => {
    navigate("/accepted-requests");
  };

  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (!user) navigate("/login");
  if (!user?.student) navigate("/makeoffer");

  const filteredOffers = offers.filter(
    ({ subject: { program_id } }) => program_id === user.student.Program_id
  );

  return (
    <div className="page courses_page">
      <div className="accepted_pending_container">
        <button className="accepted_pending_button" onClick={toAccepted}>
          Accepted requests
        </button>
      </div>

      {filteredOffers.map((course: Offer) => (
        <Course course={course} />
      ))}

      {!filteredOffers.length && "Currently no available offers!"}
    </div>
  );
};
