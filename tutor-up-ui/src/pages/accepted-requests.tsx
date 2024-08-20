import { useEffect, useState } from "react";
import { Request as RequestType } from "../types";
import { getAllRequests } from "../api/requests";
import { useNavigate } from "react-router-dom";
import { AcceptedRequest } from "../components/AcceptedRequest";

export const AcceptedRequests = () => {
  const [requests, setRequests] = useState<RequestType[]>([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (!user?.student) navigate("/requests");

  const loadRequests = async () => {
    const response = await getAllRequests();
    setRequests(response.data);
  };
  const filteredRequests = requests.filter(
    ({ accepted, student: { id } }) =>
      accepted == true && id === user.student.id
  );
  const toCourses = () => {
    navigate("/courses");
  };

  return (
    <div className="page requests_page">
      <div className="requests_pending_container">
        <button className="requests_pending_button" onClick={toCourses}>
          Check out offers
        </button>
      </div>
      <div>
        {filteredRequests.map((request: RequestType) => (
          <AcceptedRequest request={request} />
        ))}
      </div>
      {!filteredRequests.length && "Currently no accepted requests!"}
    </div>
  );
};
