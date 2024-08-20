import { acceptRequest } from "../api/requests";
import { Request as RequestType } from "../types";

export const Request = ({ request }: { request: RequestType }) => {
  const accept = () => {
    acceptRequest(request.id);
  };
  return (
    <div className="request">
      <div className="request_main">
        <div className="request_main_left">
          <span className="request_title">
            Student: {request.student.name} {request.student.surname}
          </span>
          <span className="request_student">Offer: {request.offer.title}</span>
        </div>
      </div>
      <div className="request_footer">
        {request.accepted ? (
          "Accepted"
        ) : (
          <button className="request_button" onClick={accept}>
            Accept request
          </button>
        )}
      </div>
    </div>
  );
};
