import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [happy, setHappy] = useState(false);

  return (
    <section className="form">
      <h2>Form</h2>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
          //   Hier verbinden wir Inputfeld mit dem State :
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(Number(event.target.value))}
          value={age}
        />
        <label htmlFor="happy">Are you Happy?</label>
        <input
          type="checkbox"
          name="happy"
          id="happy"
          onChange={(event) => setHappy(event.target.checked)}
          checked={happy}
        />
      </form>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Happy?: {happy ? ":)" : ":("}</p>
    </section>
  );
};

export default Form;
