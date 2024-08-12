import { Offer } from "../components/Offer";

export const MakeOffer = () => {
  return (
    <div className=" page make_offer_page">
      <div className="requests_pending_container">
        <button className="requests_pending_button">
          Requests Pending: <span className="requests_pending_count">0</span>
        </button>
      </div>

      <div className="offer_form_wrapper">
        <Offer />
      </div>
    </div>
  );
};
