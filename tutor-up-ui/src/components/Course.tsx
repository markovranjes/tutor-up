export const Course = () => {
  return (
    <div className="course">
      <div className="course_main">
        <div className="course_main_left">
          <span className="course_title"> Course title </span>
          <span className="course_tutor"> Tutor </span>
        </div>
        <span className="course_price">Price </span>
      </div>
      <span className="course_location">Location</span>
      <p>Description </p>

      <div className="course_footer">
        <button>Send request</button>
      </div>
    </div>
  );
};
