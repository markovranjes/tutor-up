import { createRequest } from "../api/requests";
import { Offer } from "../types";

export const Course = ({ course }: { course: Offer }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const sendRequest = () => {
    createRequest({
      accepted: false,
      offerId: course.id,
      studentId: user.student.id,
    });
  };
  return (
    <div className="course">
      <div className="course_main">
        <div className="course_main_left">
          <span className="course_title">{course.title}</span>
          <span className="course_tutor">
            Tutor: {course.tutor.name} {course.tutor.surname}
          </span>
        </div>
        <span className="course_price">{course.price}€</span>
      </div>
      <span className="course_location">{course.location}</span>
      <p>{course.description}</p>

      <div className="course_footer">
        <button onClick={sendRequest}>Send request</button>
      </div>
    </div>
  );
};
