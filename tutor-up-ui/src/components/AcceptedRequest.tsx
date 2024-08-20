import { Request as RequestType } from "../types";

export const AcceptedRequest = ({ request }: { request: RequestType }) => {
  return (
    <div className="request">
      <div className="request_main">
        <div className="request_main_left">
          <span className="request_title">
            Tutor: {request.offer.tutor?.name} {request.offer.tutor?.surname}
          </span>
          <span className="request_student">Offer: {request.offer.title}</span>
          <span className="request_student">
            Phone: {request.offer.tutor?.phone}
          </span>
        </div>
      </div>
      <div className="request_footer">
        {request.accepted ? "Accepted!" : "Pending"}
      </div>
    </div>
  );
};
