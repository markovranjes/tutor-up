export const Signup = () => {
  return (
    <div>
      Signup
      <div>
        <span>Account type:</span>
        <select>
          <option>Tutor</option>
          <option>Student</option>
        </select>
      </div>
      <div>
        <span>Name:</span>
        <input></input>
      </div>
      <div>
        <span>Surname:</span>
        <input></input>
      </div>
      <div>
        <span>Email:</span>
        <input type="email"></input>
      </div>
      <div>
        <span>Password:</span>
        <input type="password"></input>
      </div>
      <div>
        <span>Univerisity:</span>
        <input></input>
      </div>
    </div>
  );
};
