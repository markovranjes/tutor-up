import { useEffect, useState } from "react";
import { Request as RequestType } from "../types";
import { getAllRequests } from "../api/requests";
import { Request } from "../components/Request";
import { useNavigate } from "react-router-dom";

export const Requests = () => {
  const [requests, setRequests] = useState<RequestType[]>([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const response = await getAllRequests();
    setRequests(response.data);
  };

  const toMakeOffer = () => {
    navigate("/makeoffer");
  };
  const filteredRequests = requests.filter(
    ({
      offer: {
        tutor: { id },
      },
    }) => id === user.tutor.id
  );

  return (
    <div className="page requests_page">
      <div className="requests_pending_container">
        <button className="requests_pending_button" onClick={toMakeOffer}>
          Make an Offer
        </button>
      </div>
      {filteredRequests.map((request: RequestType) => (
        <Request request={request} />
      ))}
      {!filteredRequests.length && "Currently no active requests!"}
    </div>
  );
};
