export const Signup = () => {
  return (
    <div className="page signup_page">
      <div className="signup_block">
        <h1 className="signup_title">Signup</h1>

        <div className="signup_field">
          <span className="signup_field_title">Account type:</span>
          <select className="signup_input">
            <option>Tutor</option>
            <option>Student</option>
          </select>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Name:</span>
          <input className="signup_input"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Surname:</span>
          <input className="signup_input"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Email:</span>
          <input className="signup_input" type="email"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Password:</span>
          <input className="signup_input" type="password"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Repeat Password:</span>
          <input className="signup_input" type="password"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">University:</span>
          <input className="signup_input"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Faculty:</span>
          <input className="signup_input"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Program:</span>
          <input className="signup_input"></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Cycle:</span>
          <select className="signup_input">
            <option>Bachelor</option>
            <option>Master</option>
            <option>PhD</option>
          </select>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Year:</span>
          <input className="signup_input" type="number"></input>
        </div>

        <button className="signup_button">Sign Up</button>
      </div>
    </div>
  );
};
