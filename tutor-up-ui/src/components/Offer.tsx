export const Offer = () => {
  return (
    <div className="offer_form_container">
      <h1 className="offer_form_title">Create an Offer</h1>

      <div className="offer_form_field">
        <label className="offer_form_label">Course Title:</label>
        <input className="offer_form_input" type="text" />
      </div>

      <div className="offer_form_field">
        <label className="offer_form_label">Location:</label>
        <select className="offer_form_input">
          <option>Online</option>
          <option>In-Person</option>
        </select>
      </div>

      <div className="offer_form_field">
        <label className="offer_form_label">Description:</label>
        <textarea className="offer_form_input offer_form_textarea"></textarea>
      </div>

      <div className="offer_form_field">
        <label className="offer_form_label">Date of Publishing:</label>
        <input className="offer_form_input" type="date" />
      </div>

      <div className="offer_form_field">
        <label className="offer_form_label">Price:</label>
        <input className="offer_form_input" type="number" />
      </div>

      <button className="offer_form_button">Publish Offer</button>
    </div>
  );
};
