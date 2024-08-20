import { useNavigate } from "react-router-dom";
import { Offer } from "../components/Offer";

export const MakeOffer = () => {
  const navigate = useNavigate();

  const toRequests = () => {
    navigate("/requests");
  };
  return (
    <div className=" page make_offer_page">
      <div className="requests_pending_container">
        <button className="requests_pending_button" onClick={toRequests}>
          Requests Pending
        </button>
      </div>

      <div className="offer_form_wrapper">
        <Offer />
      </div>
    </div>
  );
};
