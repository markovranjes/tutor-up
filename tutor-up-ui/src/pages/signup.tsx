import { useEffect, useState } from "react";
import { getAllUniversities } from "../api/universities";
import { Faculty, Program, University } from "../types";
import { getAllFaculties } from "../api/faculties";
import { getAllPrograms } from "../api/programs";
import { createTutor } from "../api/tutors";
import { createStudent } from "../api/students";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeat, setRepeat] = useState<string>("");

  const [selectedType, selectType] = useState<number>(1);
  const [selectedUniversity, selectUniversity] = useState<number>();
  const [selectedFaculty, selectFaculty] = useState<number>();
  const [selectedProgram, selectProgram] = useState<number>();

  const navigate = useNavigate();

  const signupClicked = async () => {
    if (password !== repeat) return;
    if (!selectedProgram) return;

    const tutorPayload = {
      name,
      surname,
      email,
      phone,
      password,
      repeat,
      programId: selectedProgram,
    };
    const studentPayload = {
      name,
      surname,
      email,
      password,
      repeat,
      programId: selectedProgram,
    };

    try {
      if (selectedType === 1) {
        await createTutor(tutorPayload);
      }
      if (selectedType === 2) {
        await createStudent(studentPayload);
      }

      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadUniversities();
    loadFaculties();
    loadPrograms();
  }, []);

  const loadUniversities = async () => {
    const response = await getAllUniversities();
    setUniversities(response.data);
  };

  const loadFaculties = async () => {
    const response = await getAllFaculties();
    setFaculties(response.data);
  };
  const loadPrograms = async () => {
    const response = await getAllPrograms();
    setPrograms(response.data);
  };

  const signupDisabled =
    !name || !surname || !email || !password || !repeat || !selectedProgram;

  return (
    <div className="page signup_page">
      <div className="signup_block">
        <h1 className="signup_title">Signup</h1>

        <div className="signup_field">
          <span className="signup_field_title">Account type:</span>
          <select
            className="signup_input"
            value={selectedType}
            onChange={(event) => selectType(+event.target.value)}
          >
            <option value={1}>Tutor</option>
            <option value={2}>Student</option>
          </select>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Name:</span>
          <input
            className="signup_input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Surname:</span>
          <input
            className="signup_input"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          ></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Phone number:</span>
          <input
            className="signup_input"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          ></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Email:</span>
          <input
            className="signup_input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Password:</span>
          <input
            className="signup_input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Repeat Password:</span>
          <input
            className="signup_input"
            type="password"
            value={repeat}
            onChange={(event) => setRepeat(event.target.value)}
          ></input>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">University:</span>
          <select
            className="signup_input"
            value={selectedUniversity}
            onChange={(event) => selectUniversity(+event.target.value)}
          >
            <option value="">--Please choose an university--</option>
            {universities.map((university) => (
              <option key={university.id} value={university.id}>
                {university.name} - {university.city}
              </option>
            ))}
          </select>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Faculty:</span>
          <select
            className="signup_input"
            value={selectedFaculty}
            onChange={(event) => selectFaculty(+event.target.value)}
          >
            <option value="">--Please choose a faculty--</option>
            {faculties
              .filter((faculty) => faculty.university.id === selectedUniversity)
              .map((faculty) => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name} - {faculty.university.name}
                </option>
              ))}
          </select>
        </div>

        <div className="signup_field">
          <span className="signup_field_title">Program:</span>
          <select
            className="signup_input"
            value={selectedProgram}
            onChange={(event) => selectProgram(+event.target.value)}
          >
            {programs
              .filter((program) => program.faculty.id === selectedFaculty)
              .map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
          </select>
        </div>

        <button
          className="signup_button"
          onClick={signupClicked}
          disabled={signupDisabled}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
