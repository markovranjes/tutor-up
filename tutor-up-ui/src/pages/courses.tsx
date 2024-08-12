import { Course } from "../components/Course";

export const Courses = () => {
  return (
    <div className="page courses_page">
      <div className="accepted_pending_container">
        <button className="accepted_pending_button">
          Accepted offers: <span className="accepted_pending_count">0</span>
        </button>
      </div>
      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>
    </div>
  );
};
