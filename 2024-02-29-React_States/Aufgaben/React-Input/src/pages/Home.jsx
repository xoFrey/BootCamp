import { useState } from "react";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="first name"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </form>
      <p>First Name: {firstName} </p>
      <p>Last Name: {lastName}</p>
      <p>Email:{email} </p>
    </main>
  );
};

export default Home;
