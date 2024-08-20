import { useEffect, useState } from "react";
import { getAllSubjects } from "../api/subjects";
import { Subject } from "../types";
import { createOffer } from "../api/offers";
import { useNavigate } from "react-router-dom";

export const Offer = () => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<"online" | "live">("online");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [selectedSubject, selectSubject] = useState<number>();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const navigate = useNavigate();

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    const response = await getAllSubjects();
    setSubjects(response.data);
  };

  const publishOffer = async () => {
    const payload = {
      title,
      location,
      description,
      date: new Date().toISOString().slice(0, 19).replace("T", " "),
      price,
      tutorId: user.tutor.id,
      subjectId: selectedSubject,
    };
    try {
      await createOffer(payload);
      navigate("/courses");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="offer_form_container">
      <h1 className="offer_form_title">Create an Offer</h1>

      <div className="offer_form_field">
        <label className="offer_form_label">Course Title:</label>
        <input
          className="offer_form_input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className="offer_form_label">Subject name:</label>
        <select
          className="offer_form_input"
          value={selectedSubject}
          onChange={(event) => selectSubject(+event.target.value)}
        >
          <option value="">--Please choose a subject--</option>
          {subjects
            .filter((subject) => subject.program?.id === user.tutor.Program_id)
            .map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.n_subject}
              </option>
            ))}{" "}
        </select>
      </div>

      <div className="offer_form_field">
        <label className="offer_form_label">Location:</label>
        <select
          className="offer_form_input"
          value={location}
          onChange={(event) =>
            setLocation(event.target.value as "online" | "live")
          }
        >
          <option value={"online"}>Online</option>
          <option value={"live"}>In-Person</option>
        </select>
      </div>

      <div className="offer_form_field">
        <label className="offer_form_label">Description:</label>
        <textarea
          className="offer_form_input offer_form_textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>

      <div className="offer_form_field">
        <label className="offer_form_label">Price:</label>
        <input
          className="offer_form_input"
          type="number"
          value={price}
          onChange={(event) => setPrice(+event.target.value)}
        />
      </div>

      <button className="offer_form_button" onClick={publishOffer}>
        Publish Offer
      </button>
    </div>
  );
};
